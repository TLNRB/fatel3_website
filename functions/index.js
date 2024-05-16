const { setGlobalOptions } = require("firebase-functions/v2/options");

// Set the maximum instances to 10 for all functions
setGlobalOptions({ maxInstances: 1 });

// The Cloud Functions for Firebase SDK to set up triggers and logging.
const { onSchedule } = require("firebase-functions/v2/scheduler");

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.bookingsCleanup = onSchedule("every day 00:00", async (event) => {
  /* ===== Delete bookings made on previus day =====*/
  const currentDateTime = new Date();
  console.log("currentDateTime", currentDateTime);
  // Calculate the datetime of the previous date
  currentDateTime.setDate(currentDateTime.getDate() - 1);

  const previusDate = currentDateTime.getDate();
  console.log("previusDate", previusDate);

  // Reference to your Firestore collection
  const bookingsRef = admin.firestore().collection("bookings");

  // Query bookings made on the previous day
  const querySnapshot = await bookingsRef
    .where("day", "==", previusDate).get();

  // Delete the bookings
  const batch = admin.firestore().batch();
  querySnapshot.forEach((doc) => {
    console.log("preparing to delete", doc.id);
    batch.delete(doc.ref);
  });

  // Commit the batch
  await batch.commit();
  console.log("deleted bookings");

  // Set the reserved number of classes back to 0 on each class
  // Calculate the datetime of the previous day
  const previousDay = currentDateTime.getDay();
  console.log("previousDay", previousDay);
  // Reference to your Firestore collection
  const daysRef = admin.firestore().collection("days");
  // Get a document where the dayIndex is the previous day
  const dayDoc = await daysRef.where("dayIndex", "==", previousDay).get();

  let dayData = {};
  // Check if there is a document returned
  if (!dayDoc.empty) {
    // Get the first document
    dayData = dayDoc.docs[0].data();
    console.log("day", dayData);
  } else {
    console.log("No matching document found");
  }

  dayData.times.forEach((time) => {
    time.reserved = false;
  });

  // Update the previous day doc
  await dayDoc.ref.update(dayData);
  console.log("dayDoc updated", dayDoc.id);

  return null;
});
