import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// Put your SDK details
const firebaseConfig = {
    apiKey: "AIzaSyDayHF7Il58u-Kw1YK5aj1petmzu5HqAwI",
    authDomain: "testsso-381ca.firebaseapp.com",
    projectId: "testsso-381ca",
    storageBucket: "testsso-381ca.appspot.com",
    messagingSenderId: "886143289462",
    appId: "1:886143289462:web:8ca122113c8dcd35f9b757"
};

// Check if there is no existing Firebase instance initialized

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// Initialize Provider & Export
const microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com').setCustomParameters({
    // login_hint: 'user@organization.com',
    tenant: '21bb1d3e-726c-4f84-9339-51bc05929874', // Put Tenant Id from Azure registered app,
    prompt: 'consent' // Get Consent from the user to access their basic info (optional - Recommended only during SignUp)
});

export { app, microsoftProvider };