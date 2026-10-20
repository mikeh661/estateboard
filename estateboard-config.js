// EstateBoard connection settings.
// Set up for the estate-board-76890 Firebase project. Both the admin page and the board read it.
// These values are not passwords: they only say which database to talk to.
// Who can see or change anything is controlled by the logins and the security rules.

window.ESTATEBOARD_CONFIG = {

  // Paste the firebaseConfig values from the Firebase console here
  firebase: {
    apiKey:            "AIzaSyBzEayzglUwkzDhLLQsmGEaFp8GB89VfoM",
    authDomain:        "estate-board-76890.firebaseapp.com",
    projectId:         "estate-board-76890",
    storageBucket:     "estate-board-76890.firebasestorage.app",
    messagingSenderId: "928805254995",
    appId:             "1:928805254995:web:d33037c56f8e28a83413a6"
  },

  // Your own login email, in lower case. It must match the email in firestore.rules.
  // This login can manage the team and restore backups.
  ownerEmail: "michaelhayward@castle-estates.co.uk",

  // How your name appears on changes you make
  ownerName: "Mike Hayward"
};
