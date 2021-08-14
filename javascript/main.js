gsap.registerPlugin(ScrollTrigger);
gsap.from(".hero__title", {
  duration: 2,
  x: -100,
  opacity: 0,
});
gsap.from(".img-hero", {
  duration: 2,
  x: 100,
});
gsap.from(".introduce", {
  duration: 2,
  x: -100,
  opacity: 0,
});
const isCovid = document.querySelectorAll(".isCovid");
const hightLightTxt = document.querySelectorAll(".hight-light-text");
isCovid.forEach((cv) => {
  gsap.from(cv, {
    scrollTrigger: {
      trigger: cv,
      start: "top 99%",
      end: "top 80%",
    },
    duration: 1,
    x: -100,
    opacity: 0,
  });
});
hightLightTxt.forEach((hl) => {
  gsap.from(hl, {
    scrollTrigger: {
      trigger: hl,
      start: "20px 99%",
      end: "top 80%",
    },
    duration: 1,
    opacity: 1,
  });
});
const btnTrigger = document.querySelectorAll(".btn_trigger");
btnTrigger.forEach((btn) => {
  gsap.from(btn, {
    scrollTrigger: {
      trigger: btn,

      start: "top 95%",
      end: "top 80%",
    },
    duration: 1,
    delay: 0.5,
    y: 30,
    opacity: 0,
  });
});
const coronaVirus = document.querySelectorAll(".coronavirus");

coronaVirus.forEach((cr) => {
  gsap.from(cr, {
    scrollTrigger: {
      trigger: cr,
      start: "top bottom",
      end: "top 370px",
    },
    duration: 2,
    x: 100,
    opacity: 0,
  });
});
const fitTxt = document.querySelectorAll(".autofit-txt");

fitTxt.forEach((fit) => {
  gsap.from(fit, {
    scrollTrigger: {
      trigger: fit,
      start: "20px 99%",
      end: "top 80%",
    },
    duration: 1,
    opacity: 0,
    delay: 0.5,
    x: 100,
  });
});
const covidTxt = document.querySelectorAll(".text-covid");

covidTxt.forEach((cvtxt) => {
  gsap.from(cvtxt, {
    scrollTrigger: {
      trigger: cvtxt,
      start: "20px 99%",
      end: "top 80%",
    },
    duration: 1,
    opacity: 0,
    x: 100,
  });
});
const imgPr = document.querySelectorAll(".img-protect");

imgPr.forEach((img) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "20px 99%",
      end: "top 80%",
    },
    duration: 1,
    opacity: 0,
    x: -100,
  });
});
//////////////////////////////////////CUSTOM NAV BAR
const Burger = document.querySelector(".hamburger-menu");
const NavBar = document.querySelector(".nav-bar-responsive");
const ListLink = document.querySelectorAll(".list-lnk");

Burger.addEventListener("click", () => {
  Burger.classList.toggle("rotate");
  NavBar.classList.toggle("isActiveBar");
  document.body.classList.toggle("isFullWidth");
});

ListLink.forEach((link) => {
  link.addEventListener("click", () => {
    NavBar.classList.remove("isActiveBar");
    document.body.classList.remove("isFullWidth");
  });
});
