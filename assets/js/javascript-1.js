const buttonMenu = document.querySelector(".header .inner-menu");
const hideMenu = document.querySelector(".hide-menu");

buttonMenu.addEventListener("click",() => {
  hideMenu.style.display =  hideMenu.style.display == "block" ? "none" : "block";
});