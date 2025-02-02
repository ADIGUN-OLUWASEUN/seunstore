
// Firebase initialization and Firestore import
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIAJGQ0jMBuq8Na0dTDbG6KfP6QobYtjg",
  authDomain: "seunstore-79b65.firebaseapp.com",
  projectId: "seunstore-79b65",
  storageBucket: "seunstore-79b65.firebasestorage.app",
  messagingSenderId: "95390549922",
  appId: "1:95390549922:web:bfcfdd9e136328958594fb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Display order summary after page load
window.onload = function () {
  displayOrderSummary();
};

// Function to display order summary
function displayOrderSummary() {
  const orderSummary = document.getElementById("orderSummary");
  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];

  if (cartProduct.length > 0) {
    let totalAmount = 0;
    let summaryHtml = "<h4>Order Summary:</h4>";

    cartProduct.forEach((prod) => {
      const { title, price, count } = prod;
      totalAmount += price * count;

      summaryHtml += `
        <div class="summary-item">
          <p>${title} x ${count} = $${(price * count).toFixed(2)}</p>
        </div>
      `;
    });

    summaryHtml += `<h5 class="total-price">Total: $${totalAmount.toFixed(2)}</h5>`;
    orderSummary.innerHTML = summaryHtml;
  } else {
    orderSummary.innerHTML = "<p>No items in your cart.</p>";
  }
}

// Function to save order to Firestore
async function saveOrderToFirestore(orderDetails) {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...orderDetails,
      createdAt: new Date(),
    });
    console.log("Order saved with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding order: ", e);
  }
}

// Function to handle payment process
window.makePayment = function () {
  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
  if (cartProduct.length > 0) {
    const orderDetails = {
      items: cartProduct,
      totalAmount: cartProduct.reduce((total, prod) => total + prod.price * prod.count, 0),
    };
    saveOrderToFirestore(orderDetails);
    window.location.href = "https://www.quickteller.com/pay";
  } else {
    alert("You cannot proceed to payment. Your cart is empty!");
  }
};
