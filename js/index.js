// Your code goes here

//1. Scale Up
const navigationLinksUp = document.querySelectorAll("a");
navigationLinksUp.forEach(links => {
  links.addEventListener("mouseover", e => {
    links.style.transform = "scale(1.2)";
    links.style.transition = "transform 0.2s";
  });
});

//2. Scale Down
const navigationLinksDown = document.querySelectorAll("a");
navigationLinksDown.forEach(links => {
  links.addEventListener("mouseleave", e => {
    links.style.transform = "scale(1)";
    links.style.transition = "transform 0.2s";
  });
});

//3.  Click
const headerContainer = document.querySelector(".intro");
headerContainer.addEventListener("click", e => {
  headerContainer.style.overflow = "hidden";
});

const headerImg = document.querySelector("img");
headerImg.addEventListener("click", e => {
  headerImg.style.transform = "scale(1.2)";
  headerImg.style.transition = "transform 0.2s";
  headerImg.style.marginTop = "2.5rem";
});

//4.  DbClick
const headerImgDb = document.querySelector("img");
headerImgDb.addEventListener("dblclick", e => {
  headerImgDb.style.transform = "scale(1)";
  headerImgDb.style.transition = "transform 0.2s";
});

// 5. mouseenter
const contentScroll = document.querySelectorAll(".content-section");
contentScroll.forEach(items => {
  items.addEventListener("mouseenter", e => {
    items.style.flexDirection = "column";
    items.style.alignItems = "center";
    items.style.transform = "scale(1.05)";
    items.style.transition = "transform 0.3s";
  });
});

// 6. keydown/
window.addEventListener("keydown", e => {
  console.log(`I am pressing: ${e.code}`);
});

// 7. mouseover & MouseLeave

const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn =>
  btn.addEventListener("mouseover", () => (btn.textContent = "Hello"))
);
buttons.forEach(btn =>
  btn.addEventListener("mouseleave", () => (btn.textContent = "Sign Me Up!"))
);

// 8. Load Event

window.addEventListener("load", e => {
  alert("The Website Just Loaded");
});

// 9. Scroll
const homePage = document.querySelector(".home");
window.addEventListener("scroll", e => {
  homePage.style.background = "red";
});

// 10. Drag

const imageBus = document.querySelector("img");
imageBus.addEventListener("drag", e => {
  document.body.style.backgroundColor = "green";
});

//
const contentSection = document.querySelector(".content-section");
const contentImg = document.querySelector(".content-section img");
contentSection.addEventListener("click", e => {
  alert("Map Container");
});

contentImg.addEventListener("click", e => {
  alert("Map Image");
  e.stopPropagation();
});

// PreventDefault
const buttonLinks = document.querySelectorAll(".btn");
buttonLinks.forEach(links => {
  links.addEventListener("click", e => {
    console.log(`Button fired a click!`);

    e.preventDefault();
  });
});
