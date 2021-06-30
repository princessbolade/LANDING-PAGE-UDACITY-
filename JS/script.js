let mainNav = document.querySelector("#nav-menu");
let NavBarToggle = document.getElementById("hamburger-toggle");

NavBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

let ScrollToTopBtn = document.querySelector("#button");
const body = window;

body.addEventListener("scroll", function () {
  if (body.scrollY > 300) {
    console.log("yes");
    ScrollToTopBtn.classList.add("show");
  } else {
    ScrollToTopBtn.classList.remove("show");
  }
});

ScrollToTopBtn.onclick = function () {
  console.log("yes");
  scrollTo(0, 300);
};

let scrollTo = function (to, duration) {
  let element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startTs = performance.now(),
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    animateScroll = function (ts) {
      let currentTime = ts - startTs;
      element.scrollTop = parseInt(
        easeInOutQuad(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  requestAnimationFrame(animateScroll);
};

let smoothScroll = document.getElementsByClassName("nav-links");

smoothScroll.addEventListener("click", function () {
  e.preventdefault();
  let scrollTarget = document.querySelector(this).attr("href");
  if (scrollTarget.length) {
    let scrollTo = scrollTarget.offset().top;
    document
      .querySelector("body, html")
      .animate({ scrollTop: scrollTo + "px" }, 800);
  }
});
