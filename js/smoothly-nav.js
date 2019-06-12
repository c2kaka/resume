let menuTriggers = document.querySelectorAll("nav.menu > ul > li");
for (let i = 0; i < menuTriggers.length; i++) {
  menuTriggers[i].onmouseenter = function(e) {
    e.currentTarget.classList.add("active");
  };

  menuTriggers[i].onmouseleave = function(e) {
    e.currentTarget.classList.remove("active");
  };
}

let aTags = document.querySelectorAll("nav.menu > ul > li > a");
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(e) {
    e.preventDefault();
    let href = e.currentTarget.getAttribute("href");
    let div = document.querySelector(href);
    let currentY = window.scrollY;
    let targetY = div.offsetTop - 80;
    let distance = targetY - currentY;
    // Setup the animation loop.
    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    let duration = Math.abs(
      (distance / 100) * 200 > 400 ? 400 : (distance / 100) * 200
    );
    let coords = {
      y: currentY
    }; // Start at currentY
    let tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
      .to(
        {
          y: targetY
        },
        duration
      ) // Move to targetY in duration
      .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
      .onUpdate(function() {
        // Called after tween.js updates 'coords'.
        window.scrollTo(0, coords.y);
      })
      .start(); // Start the tween immediately.
  };
}
