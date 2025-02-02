import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Firebase configuration
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

// Admin credentials
const adminEmail = "oluwaseadigun@gmail.com";

// Check if the user is signed in as admin
onAuthStateChanged(auth, async (user) => {
  if (user && user.email === adminEmail) {
    // User is authenticated as admin
    loadUserData();
  } else {
    // User is not authenticated as admin
    alert("Access denied. You are not authorized to view this page.");
    window.location.href = "signinsignup.html"; // Redirect to sign-in page
  }
});

// Function to load user data from Firestore
async function loadUserData() {
  const userTableBody = document.getElementById('user-table-body');
  userTableBody.innerHTML = ''; // Clear any existing rows

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    const userData = doc.data();
    const cartItems = userData.cart ? userData.cart.join(", ") : "No items in cart";

    const row = `
      <tr>
        <td>${doc.id}</td>
        <td>${userData.email}</td>
        <td>${userData.username}</td>
        <td>${userData.phone}</td>
        <td>${cartItems}</td>
      </tr>
    `;
    userTableBody.innerHTML += row;
  });
}