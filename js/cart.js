const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".checkout-items__container");

function addToCart() {
  cartContainer.innerHTML = "";

  total += product.price;
  cartItems.forEach(function () {
    cartContainer.innerHTML += ` <div>
          <h3>${product.name}</h3>
        </div>`;
  });
}
