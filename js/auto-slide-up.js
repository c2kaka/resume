let specialTags = document.querySelectorAll("[data-x]");
for (let i = 0; i < specialTags.length; i++) {
  specialTags[i].classList.add("offset");
}

findClosestAndRemoveOffset();

window.addEventListener("scroll", function() {
  findClosestAndRemoveOffset();
});

/**
 * 找到离当前视口最近的模块
 */
function findClosestAndRemoveOffset() {
  //find all elements with data-x
  let datas = document.querySelectorAll("[data-x]");
  let windowScrollY = window.scrollY;
  let minIndex = 0; //init minIndex as 0
  for (let i = 1; i < datas.length; i++) {
    let currentDistance = Math.abs(datas[i].offsetTop - windowScrollY);
    let minDistance = Math.abs(datas[minIndex].offsetTop - windowScrollY);
    if (currentDistance < minDistance) {
      minIndex = i;
    }
  }
  datas[minIndex].classList.remove("offset");
  let minSectionId = datas[minIndex].id;
  let highLightLi = document.querySelector('a[href="#' + minSectionId + '"]')
    .parentNode;
  let brothersAndMe = highLightLi.parentNode.children;
  for (let i = 0; i < brothersAndMe.length; i++) {
    brothersAndMe[i].classList.remove("highLight");
  }
  highLightLi.classList.add("highLight");
}
