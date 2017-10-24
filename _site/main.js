let menuRes = document.querySelector(".menu-res")
let containerMenu = document.querySelectorAll(".container-menu")

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
