window.addEventListener("scroll", function() {
  window.scrollY > 0
    ? topNavBar.classList.add("sticky")
    : topNavBar.classList.remove("sticky");
});
