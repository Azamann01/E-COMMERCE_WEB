const cartIcon = document.querySelector("#icon-section");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cancel-pg");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

// cartIcon.onclick = () => cart.classList.add('active');
// cartClose.onclick = () => cart.classList.remove("active");

const addBagButtons = document.querySelectorAll(".btn-price");
addBagButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productBox = event.target.closest(".product-box");
    addBagToButtons(productBox);
  });
});

const cartContent = document.querySelector(".cart-content");
const addBagToButtons = (productBox) => {
  const productImgSrc = productBox.querySelector("img").src;
  const productTitle = productBox.querySelector(".text-parag").textContent;
  const productPrice = productBox.querySelector(".price").textContent;

  const cartItems = cartContent.querySelectorAll(".cart-product-title");
  for (let item of cartItems) {
    if (item.textContent === productTitle) {
      alert("Item is already in the cart!");
      return;
    }
  }

  const cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");
  cartBox.innerHTML = `
    <img src="${productImgSrc}"class="cart-img">
          <div class="cart-detail">
            <h2 class="cart-product-title">${productTitle}</h2>
            <span class="cart-price">${productPrice}</span>
            <div class="cart-quantity">
              <button id="minus">-</button>
              <span class="number">1</span>
              <button id="add">+</button>
            </div>
          </div>
          <i class="bx bx-message-square-x cart-remove"></i>`;
  cartContent.appendChild(cartBox);
};
