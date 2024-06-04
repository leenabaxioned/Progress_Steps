/* Author: */
var circles = document.querySelectorAll(".circle");
var btn = document.querySelectorAll("button");
var progressBar = document.querySelector(".progress-bar");

let count = 0;
btn.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.id === "next") {
      if (count < 3) {
        count++;
        circles[count].classList.add("active");
        element.classList.add("activebtn")
      }else {
        element.classList.remove("activebtn")
      }
    } else if (element.id === "prev") {
      if (count > 0) {
        count--;
        circles[count + 1].classList.remove("active");
        element.classList.add("activebtn")
      }else{
        element.classList.remove("activebtn")
      }
    }
  });
});