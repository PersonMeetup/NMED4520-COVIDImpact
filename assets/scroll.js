const USERY = window.screenTop;

document.getElementsByTagName("body").style.height = USERY * 2;

console.log(USERY);

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}
