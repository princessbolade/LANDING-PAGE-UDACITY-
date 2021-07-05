// Array of Links
let ListArray = [
  {
    href: "#how-we-met",
    name: "How We Met",
  },
  {
    href: "#wedding-party",
    name: "Wedding Party",
  },
  {
    href: "#registry",
    name: "Registry",
  },
  {
    href: "#photo-gallery",
    name: "Photos",
  },
];

// Generating the NAV

const NavList = document.createElement("ul");
NavList.className = "main-nav";
const NavbarContainer = document.getElementsByClassName("navbar");
NavbarContainer[0].append(NavList);

for (let i = 0; i < 4; i++) {
  let NavListItems = document.createElement("li");
  NavListItems.className = "nav-links";
  NavList.appendChild(NavListItems);
  NavListItems.innerHTML = ListArray[i].name;
  NavListItems.setAttribute('href', ListArray[i].href)
}


// Hamburger menu for mobile screen
let NavBarToggle = document.getElementById("hamburger-toggle");

NavBarToggle.addEventListener("click", function () {
  NavList.classList.toggle("active");
});

// Scroll to top button
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


// Smooth scroll to the sections
let smoothScroll = document.getElementsByClassName("nav-links");

for (let idx = 0; idx < smoothScroll.length; idx++) {
  const element = smoothScroll[idx];
  element.addEventListener("click", function (e) {
    e.preventDefault();
    const id = element.getAttribute('href')
    let scrollTarget = document.querySelector(id);
    scrollTarget.scrollIntoView({behavior: 'smooth'})
  });
}
