// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAIAJGQ0jMBuq8Na0dTDbG6KfP6QobYtjg",
  authDomain: "seunstore-79b65.firebaseapp.com",
  projectId: "seunstore-79b65",
  storageBucket: "seunstore-79b65.appspot.com",
  messagingSenderId: "95390549922",
  appId: "1:95390549922:web:bfcfdd9e136328958594fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// DOM Elements
const toggleLink = document.getElementById("toggle-link");
const formTitle = document.getElementById("form-title");
const signInBtn = document.getElementById("signIn");
const signUpFields = document.getElementById("signUpFields");
const confirmPasswordField = document.getElementById("confirmPasswordField");
const passwordToggleBtn = document.getElementById("toggle-password");

let isSignUp = false;

const fullname = document.getElementById("fullname");
const phoneNum = document.getElementById("phoneNum");
const mail = document.getElementById("mail");
const Password1 = document.getElementById("Password1");
const Password2 = document.getElementById("Password2");

// Ensure correct visibility on page load
window.onload = () => {
  signUpFields.style.display = "none";
  confirmPasswordField.style.display = "none";
};

// Toggle Sign In / Sign Up forms
toggleLink.addEventListener("click", () => {
  isSignUp = !isSignUp;
  formTitle.textContent = isSignUp ? "Sign Up" : "Sign In";
  signInBtn.textContent = isSignUp ? "Sign Up" : "Sign In";
  toggleLink.textContent = isSignUp
    ? "Already have an account? Sign In"
    : "Don't have an account? Sign Up";
  signUpFields.style.display = isSignUp ? "block" : "none";
  confirmPasswordField.style.display = isSignUp ? "block" : "none";
});

// Password visibility toggle
passwordToggleBtn.addEventListener("click", () => {
  const type = Password1.type === "password" ? "text" : "password";
  Password1.type = type;
  Password2.type = type;
  passwordToggleBtn.textContent = type === "password" ? "Show" : "Hide";
});

// Sign In / Sign Up button click
signInBtn.addEventListener("click", async () => {
  const email = mail.value.toLowerCase().trim();
  const password1 = Password1.value.trim();
  const password2 = Password2.value.trim();
  const username = fullname?.value.toLowerCase().trim();
  const phone = phoneNum?.value.trim();
  const errorMessage = document.getElementById("error-message");

  if (isSignUp) {
    // Sign-Up Logic
    if (
      username === "" ||
      phone === "" ||
      email === "" ||
      password1 === "" ||
      password2 === ""
    ) {
      errorMessage.textContent = "Please, input all fields";
    } else if (password1 !== password2) {
      errorMessage.textContent = "Passwords do not match";
    } else if (password1.length < 8) {
      errorMessage.textContent = "Password must be at least 8 characters";
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password1);
        const user = userCredential.user;

        // Add user to Firestore
        await setDoc(doc(db, "users", user.uid), {
          email,
          username,
          phone,
        });

        alert("Sign-Up successful!");
        window.location.href = "home.html";
      } catch (error) {
        errorMessage.textContent = error.message;
      }
    }
  } else {
    // Sign-In Logic
    try {
      if (email === "oluwaseadigun@gmail.com" && password1 === "@Seun1997") {
        const userCredential = await signInWithEmailAndPassword(auth, email, password1);
        alert("Admin Sign-In successful!");
        window.location.href = "admin.html"; // Redirect to admin page
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password1);
        alert("Sign-In successful!");
        window.location.href = "home.html"; // Redirect to homepage
      }
    } catch (error) {
      errorMessage.textContent = "Failed to sign in. Please check your credentials.";
    }
  }
});

// Forgot Password functionality
document.getElementById("forgot-password").addEventListener("click", async () => {
  const email = mail.value.toLowerCase().trim();
  if (email === "") {
    alert("Please enter your email address to reset the password.");
  } else {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      alert("Failed to send reset email. Please try again.");
    }
  }
});