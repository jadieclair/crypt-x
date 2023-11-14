// Import the necessary function from the 'firebase/app' module
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Firebase configuration object containing API keys and other settings
const firebaseConfig = {
    apiKey: "AIzaSyBto38hmp8A4kgH3PFDLjtHSXqWXZJArwY",
    authDomain: "crypt-x-eebac.firebaseapp.com",
    projectId: "crypt-x-eebac",
    storageBucket: "crypt-x-eebac.appspot.com",
    messagingSenderId: "14655308085",
    appId: "1:14655308085:web:18516456736c0cf4e1cc7c",
    measurementId: "G-QPVTDKMV9X"
};

// Initialize the Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Create an authentication instance using the initialized app
export const database = getAuth(app);
