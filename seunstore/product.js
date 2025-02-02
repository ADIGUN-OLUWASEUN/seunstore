// window.onload = () => {
//     const displayDetails = document.getElementById("displayDetails");
//     const product = JSON.parse(localStorage.getItem("selectedProduct"));
  
//     if (product) {
//       const{image,title,description,price} = product
//       displayDetails.innerHTML = `
//         <div class="card carding" >
//           <img class="card-img-top img1" src="${image}" alt="Product image">
//           <div class="card-body carding-body">
//             <h5 class="card-title carding-title">${title}</h5>
//             <p class="card-text carding-text">${description}</p>
//             <p class="card-text carding-price">$${price}</p>
//           </div>
//         </div>
//       `;
//     } else {
//       displayDetails.innerHTML = "<p>No product selected.</p>";
//     }
//   };

  window.onload = () => {
    const displayDetails = document.getElementById("displayDetails");
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (product) {
      const { image, title, description, price } = product;
      displayDetails.innerHTML = `
        <div class="row g-4">
          <div class="col-md-6">
            <img class="img-fluid rounded" src="${image}" alt="Product image">
          </div>
          <div class="col-md-6">
            <div class="card-body carding-body">
              <h5 class="carding-title">${title}</h5>
              <p class="carding-text">${description}</p>
              <p class="carding-price">$${price}</p>
            </div>
          </div>
        </div>
      `;
    } else {
      displayDetails.innerHTML = "<p>No product selected.</p>";
    }
  };
  
  // // window.addEventListener('load', ()=>{
  // //      displayDetails.innerHTML = `<p>gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>`
  // // })
  
  // document.addEventListener("DOMContentLoaded", function() {
  
  // });
  