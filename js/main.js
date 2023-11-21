let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "images/dark.svg";
  } else {
    this.firstElementChild.src = "images/light.svg";
  }
  document.body.classList.toggle("light");
});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({   
     margin: 100,
    nav: true,
    navText: ["<img src='images/left.svg'/>", "<img src='images/right.svg'/>"],
    loop: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        margin: 30,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
        innerHeight:50,
      },
    },
  });
});