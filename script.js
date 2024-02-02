let fav = document.querySelector(".fav");

document.querySelector("#fav").onclick = () => {
  fav.classList.toggle("active");
  cart.classList.remove("active");
  login.classList.remove("active");
};

let cart = document.querySelector(".cart");

document.querySelector("#cart").onclick = () => {
  cart.classList.toggle("active");
  fav.classList.remove("active");
  login.classList.remove("active");
};

let login = document.querySelector(".login");

document.querySelector("#login").onclick = () => {
  login.classList.toggle("active");
  fav.classList.remove("active");
  cart.classList.remove("active");
};

window.onscroll = () => {
  fav.classList.remove("active");
  cart.classList.remove("active");
  login.classList.remove("active");
};
