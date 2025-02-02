// window.onload = function () {
//   displayAllCart();

//   // Add event listener to the Clear Cart button
//   const clearCartButton = document.getElementById("clearCart");
//   if (clearCartButton) {
//     clearCartButton.addEventListener("click", clearCart);
//   }

//   // Add event listener to the Checkout button
//   const checkoutButton = document.getElementById("checkoutButton");
//   if (checkoutButton) {
//     checkoutButton.addEventListener("click", goToCheckout);
//   }
// };

// function displayAllCart() {
//   const displayCart = document.getElementById("displayCart");
//   let quantity = document.getElementById("quantity");
//   let amount = document.getElementById("amount");
//   let clearCart = document.getElementById("clearCart");

//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   let totalAmount = 0;

//   displayCart.innerHTML = "";

//   if (cartProduct.length > 0) {
//     cartProduct.forEach((prod, i) => {
//       const { image, title, description, price, count } = prod;
//       totalAmount += price * count;

//       amount.textContent = `TOTAL AMOUNT : $${totalAmount.toFixed(2)}`;
//       quantity.textContent = `Number of items to be bought are : ${cartProduct.reduce(
//         (total, item) => total + item.count, 0
//       )}`.toUpperCase();

//       displayCart.innerHTML += `
//           <div class="card carding">
//               <img class="card-img-top img1" src="${image}" alt="Product image">
//               <div class="card-body carding-body">
//                   <h5 class="card-title carding-title">${title}</h5>
//                   <p class="card-text carding-text">${description.slice(
//                     0,
//                     100
//                   )}</p>
//                   <p class="card-text carding-price">$${price}</p>
//                   <p class="card-text">Quantity: ${count}</p>
//                   <button onclick="deleteItem(${i})">DELETE</button>
//                   <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
//               </div>
//           </div>
//           `;
//     });
//   } else {
//     amount.textContent = `TOTAL AMOUNT : $0`;
//     quantity.textContent = "NO ITEMS IN CART";
//     clearCart.style.display = "none";
//   }
// }

// function deleteItem(i) {
//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   cartProduct.splice(i, 1);
//   localStorage.setItem("cartArray", JSON.stringify(cartProduct));
//   displayAllCart();
// }

// function productDetails(i) {
//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   const selectedCartProduct = cartProduct[i];
//   console.log(selectedCartProduct);

//   localStorage.setItem("selectedProduct", JSON.stringify(selectedCartProduct));
//   window.location.href = "./product.html";
// }

// function clearCart() {
//   localStorage.removeItem("cartArray");
//   displayAllCart();
// }

// function goToCheckout() {
//   window.location.href = "./checkout.html";
// }



// window.onload = function () {
//   displayAllCart();

//   // Add event listener to the Clear Cart button
//   const clearCartButton = document.getElementById("clearCart");
//   if (clearCartButton) {
//     clearCartButton.addEventListener("click", clearCart);
//   }

//   // Add event listener to the Checkout button
//   const checkoutButton = document.getElementById("checkoutButton");
//   if (checkoutButton) {
//     checkoutButton.addEventListener("click", goToCheckout);
//   }
// };

// function displayAllCart() {
//   const displayCart = document.getElementById("displayCart");
//   let quantity = document.getElementById("quantity");
//   let amount = document.getElementById("amount");

//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   let totalAmount = 0;

//   displayCart.innerHTML = "";

//   if (cartProduct.length > 0) {
//     cartProduct.forEach((prod, i) => {
//       const { image, title, description, price, count } = prod;
//       totalAmount += price * count;

//       amount.textContent = `TOTAL AMOUNT : $${totalAmount.toFixed(2)}`;
//       quantity.textContent = `NUMBER OF ITEMS TO BE BOUGHT: ${cartProduct.reduce(
//         (total, item) => total + item.count,
//         0
//       )}`.toUpperCase();

//       displayCart.innerHTML += `
//         <div class="col-md-6 col-lg-4">
//           <div class="card">
//             <img class="card-img-top img-fluid" src="${image}" alt="Product image">
//             <div class="card-body">
//               <h5 class="card-title">${title}</h5>
//               <p class="card-text">${description.slice(0, 100)}</p>
//               <p class="card-price">$${price}</p>
//               <p class="card-text">Quantity: ${count}</p>
//               <button class="btn btn-danger" onclick="deleteItem(${i})">DELETE</button>
//               <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
//             </div>
//           </div>
//         </div>
//       `;
//     });
//   } else {
//     amount.textContent = `TOTAL AMOUNT : $0`;
//     quantity.textContent = "NO ITEMS IN CART";
//     clearCart.style.display = "none";
//   }
// }

// function deleteItem(i) {
//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   cartProduct.splice(i, 1);
//   localStorage.setItem("cartArray", JSON.stringify(cartProduct));
//   displayAllCart();
// }

// function productDetails(i) {
//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   const selectedCartProduct = cartProduct[i];
//   localStorage.setItem("selectedProduct", JSON.stringify(selectedCartProduct));
//   window.location.href = "./product.html";
// }

// function clearCart() {
//   localStorage.removeItem("cartArray");
//   displayAllCart();
// }

// function goToCheckout() {
//   window.location.href = "./checkout.html";
// }

// window.onload = function () {
//   displayAllCart();

//   // Add event listener to the Clear Cart button
//   const clearCartButton = document.getElementById("clearCart");
//   if (clearCartButton) {
//     clearCartButton.addEventListener("click", clearCart);
//   }

//   // Add event listener to the Checkout button
//   const checkoutButton = document.getElementById("checkoutButton");
//   if (checkoutButton) {
//     checkoutButton.addEventListener("click", goToCheckout);
//   }
// };

// function displayAllCart() {
//   const displayCart = document.getElementById("displayCart");
//   let quantity = document.getElementById("quantity");
//   let amount = document.getElementById("amount");

//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   let totalAmount = 0;

//   displayCart.innerHTML = "";

//   if (cartProduct.length > 0) {
//     cartProduct.forEach((prod, i) => {
//       const { image, title, description, price, count } = prod;
//       totalAmount += price * count;

//       amount.textContent = `TOTAL AMOUNT : $${totalAmount.toFixed(2)}`;
//       quantity.textContent = `NUMBER OF ITEMS TO BE BOUGHT: ${cartProduct.reduce(
//         (total, item) => total + item.count,
//         0
//       )}`.toUpperCase();

//       displayCart.innerHTML += `
//         <div class="col">
//           <div class="product-card">
//             <img class="img-fluid" src="${image}" alt="Product image">
//             <div class="card-body">
//               <h5 class="card-title">${title}</h5>
//               <p class="card-text">${description.slice(0, 100)}</p>
//               <p class="card-price">$${price}</p>
//               <p class="card-text">Quantity: ${count}</p>
//               <button class="btn btn-danger" onclick="deleteItem(${i})">DELETE</button>
//               <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
//             </div>
//           </div>
//         </div>
//       `;
//     });
//   } else {
//     amount.textContent = `TOTAL AMOUNT : $0`;
//     quantity.textContent = "NO ITEMS IN CART";
//     clearCart.style.display = "none";
//   }
// }

// function deleteItem(i) {
//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   cartProduct.splice(i, 1);
//   localStorage.setItem("cartArray", JSON.stringify(cartProduct));
//   displayAllCart();
// }

// function productDetails(i) {
//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   const selectedCartProduct = cartProduct[i];
//   localStorage.setItem("selectedProduct", JSON.stringify(selectedCartProduct));
//   window.location.href = "./product.html";
// }

// function clearCart() {
//   localStorage.removeItem("cartArray");
//   displayAllCart();
// }

// function goToCheckout() {
//   window.location.href = "./checkout.html";
// }


// window.onload = function () {
//   displayAllCart();

//   // Add event listener to the Clear Cart button
//   const clearCartButton = document.getElementById("clearCart");
//   if (clearCartButton) {
//     clearCartButton.addEventListener("click", clearCart);
//   }

//   // Add event listener to the Checkout button
//   const checkoutButton = document.getElementById("checkoutButton");
//   if (checkoutButton) {
//     checkoutButton.addEventListener("click", goToCheckout);
//   }
// };

// function displayAllCart() {
//   const displayCart = document.getElementById("displayCart");
//   let quantity = document.getElementById("quantity");
//   let amount = document.getElementById("amount");

//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   let totalAmount = 0;

//   displayCart.innerHTML = "";

//   if (cartProduct.length > 0) {
//     cartProduct.forEach((prod, i) => {
//       const { image, title, description, price, count } = prod;
//       totalAmount += price * count;

//       amount.textContent = `TOTAL AMOUNT : $${totalAmount.toFixed(2)}`;
//       quantity.textContent = `NUMBER OF ITEMS TO BE BOUGHT: ${cartProduct.reduce(
//         (total, item) => total + item.count,
//         0
//       )}`.toUpperCase();

//       displayCart.innerHTML += `
//         <div class="col">
//           <div class="product-card">
//             <img class="img-fluid" src="${image}" alt="Product image">
//             <div class="card-body">
//               <h5 class="card-title">${title}</h5>
//               <p class="card-text">${description.slice(0, 100)}</p>
//               <p class="card-price">$${price}</p>
//               <p class="card-text">Quantity: ${count}</p>
//               <button class="btn btn-danger" onclick="deleteItem(${i})">DELETE</button>
//               <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
//             </div>
//           </div>
//         </div>
//       `;
//     });
//   } else {
//     amount.textContent = `TOTAL AMOUNT : $0`;
//     quantity.textContent = "NO ITEMS IN CART";
//     clearCart.style.display = "none";
//   }
// }

// function deleteItem(i) {
//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   cartProduct.splice(i, 1);
//   localStorage.setItem("cartArray", JSON.stringify(cartProduct));
//   displayAllCart();
// }

// function productDetails(i) {
//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   const selectedCartProduct = cartProduct[i];
//   localStorage.setItem("selectedProduct", JSON.stringify(selectedCartProduct));
//   window.location.href = "./product.html";
// }

// function clearCart() {
//   localStorage.removeItem("cartArray");
//   displayAllCart();
// }

// function goToCheckout() {
//   window.location.href = "./checkout.html";
// }




window.onload = function () {
  displayAllCart();

  // Add event listener to the Clear Cart button
  const clearCartButton = document.getElementById("clearCart");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", clearCart);
  }

  // Add event listener to the Checkout button
  const checkoutButton = document.getElementById("checkoutButton");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", goToCheckout);
  }
};

function displayAllCart() {
  const displayCart = document.getElementById("displayCart");
  let quantity = document.getElementById("quantity");
  let amount = document.getElementById("amount");

  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
  let totalAmount = 0;

  displayCart.innerHTML = "";

  if (cartProduct.length > 0) {
    cartProduct.forEach((prod, i) => {
      const { image, title, description, price, count } = prod;
      totalAmount += price * count;

      amount.textContent = `TOTAL AMOUNT : $${totalAmount.toFixed(2)}`;
      quantity.textContent = `NUMBER OF ITEMS TO BE BOUGHT: ${cartProduct.reduce(
        (total, item) => total + item.count,
        0
      )}`.toUpperCase();

      // Create a new div for each product and attach event listeners here
      const productCard = document.createElement('div');
      productCard.classList.add('col');
      productCard.innerHTML = `
        <div class="product-card">
          <img class="img-fluid" src="${image}" alt="Product image">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description.slice(0, 100)}</p>
            <p class="card-price">$${price}</p>
            <p class="card-text">Quantity: ${count}</p>
            <button class="btn btn-danger delete-btn">DELETE</button>
            <a href="#" class="btn btn-primary details-btn">CHECK DETAILS</a>
          </div>
        </div>
      `;
      
      // Attach the event listeners dynamically after adding the card to the page
      const deleteButton = productCard.querySelector('.delete-btn');
      deleteButton.addEventListener('click', function () {
        deleteItem(i);
      });

      const detailsButton = productCard.querySelector('.details-btn');
      detailsButton.addEventListener('click', function () {
        productDetails(i);
      });

      displayCart.appendChild(productCard);
    });
  } else {
    amount.textContent = `TOTAL AMOUNT : $0`;
    quantity.textContent = "NO ITEMS IN CART";
    clearCart.style.display = "none";
  }
}

function deleteItem(i) {
  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
  cartProduct.splice(i, 1);
  localStorage.setItem("cartArray", JSON.stringify(cartProduct));
  displayAllCart();
}

function productDetails(i) {
  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
  const selectedCartProduct = cartProduct[i];
  localStorage.setItem("selectedProduct", JSON.stringify(selectedCartProduct));
  window.location.href = "./product.html";
}

function clearCart() {
  localStorage.removeItem("cartArray");
  displayAllCart();
}

function goToCheckout() {
  window.location.href = "./checkout.html";
}
