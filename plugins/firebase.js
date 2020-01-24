import firebase from "firebase"


var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

// const setting = { /* your settings... */ timestampsInSnapshots: true };
// firestore.settings(settings);

export default firebase