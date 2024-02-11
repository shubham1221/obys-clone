function loadingAnimatio() {
  let tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.2,
    // delay: 0,
  });

  tl.from(".line1-part1", {
    opacity: 0,
    onStart: function () {
      let h5Timer = document.querySelector(".line1-part1 h5");
      let grow = 0;

      setInterval(function () {
        if (grow < 100) {
          h5Timer.innerHTML = grow++;
        } else {
          h5Timer.innerHTML = grow;
        }
      }, 25);
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 0,
  });

  tl.to(".loader", {
    opacity: 0,
    duration: 0.1,
    delay: 1.6,
  });

  tl.from(".page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });

  tl.to(".loader", {
    display: "none",
  });

  tl.from(".nav", {
    opacity: 0,
  });

  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y: 150,
    stagger: 0.2,
  });
}

function cursorAnimation() {
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });

  // Make Menu Magnet

  Shery.makeMagnet(".nav-part2 h4" /* Element to target.*/, {
    //Parameters are optional.
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // duration: 1,
  });
}

loadingAnimatio();
cursorAnimation();
