// ---------------------------------------------------------------------------
// Firebase setup for live syncing between devices.
//
// 1. Go to https://console.firebase.google.com and create a free project
//    (any name is fine, e.g. "jaxon-first-foods").
// 2. In the left sidebar, go to Build > Firestore Database > Create database.
//    Choose "Start in test mode" for now (we'll fix the rules below).
// 3. Click the gear icon (top left) > Project settings.
// 4. Scroll to "Your apps," click the </> (web) icon, and register an app
//    (nickname doesn't matter, and skip Firebase Hosting).
// 5. Firebase will show you a firebaseConfig object. Copy those values into
//    the object below, replacing the placeholders.
// 6. Back in Firestore Database > Rules, replace the rules with:
//
//      rules_version = '2';
//      service cloud.firestore {
//        match /databases/{database}/documents {
//          match /{document=**} {
//            allow read, write: if true;
//          }
//        }
//      }
//
//    (The default "test mode" rule Firebase suggests expires after 30 days —
//    this replaces it so sync doesn't quietly stop working next month.)
// 7. Save this file and commit it along with the rest of the site.
// ---------------------------------------------------------------------------

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let db = null;
try {
  if (firebaseConfig.apiKey !== "YOUR_API_KEY" && typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
  }
} catch (err) {
  console.warn('Firebase did not initialize:', err.message);
  db = null;
}