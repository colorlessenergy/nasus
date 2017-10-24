let menuRes = document.querySelector(".menu-res");
let containerMenu = document.querySelectorAll(".container-menu");
let galleryDiv = document.querySelectorAll(".gallery div");

// scroll animation only runs once
let once = false;


window.addEventListener('scroll', function (e) {
  if (window.scrollY > 378 && !once) {
    console.log("called", window.scrollY);
    galleryDiv.forEach(function (current) {
      current.classList.toggle("move-image");
    });
    once = true;
  }
})

containerMenu.forEach(function (current) {
  current.addEventListener('click', function () {
    containerMenu.forEach(function (e) {
      e.classList.toggle("change");
    })
    menuRes.classList.toggle("toggle-nav");
    menuRes.querySelectorAll(".res-nav li").forEach(function (li) {
      li.classList.toggle("toggle-nav-li")
    })
  })
})
