/*============== SHOW & HIDE MENU =============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*======== SHOW MENU=========*/
// Validate if constants exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*======== HIDE MENU=========*/
// Validate if constants exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*============== REMOVE MENU IN MOBILE =============*/
const navLink = document.querySelectorAll(".nav__link");

function removeMenu() {
  // When we click each link, the show menu class gets removed.
  navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => {
  link.addEventListener("click", removeMenu);
});

/*============== TYPED JS =============*/

let type = new Typed(".type", {
  strings: ["Cinematographer "],
  loop: true,
  typeSpeed: 60,
});

/*============== ACCORDION SKILLS =============*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentElement.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass == "skills__content skills__close") {
    this.parentElement.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener("click", toggleSkills);
});

/*============== QUALIFICATION TABS =============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });

    tab.classList.add("qualification__active");
  });
});

/*================ SERVICES MODAL ===============*/
const modalBtns = document.querySelectorAll(".services__button"),
  modalViews = document.querySelectorAll(".services__modal"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalclose, i) => {
  modalclose.addEventListener("click", () => {
    modalViews[i].classList.remove("active-modal");
  });
});



/*================ SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
console.log(sections);

function scrollActive() {
  const scrollY = window.pageYOffset;
  // console.log(scrollY)

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);



window.addEventListener("scroll", scrollHeader);

/*================ SHOW SCROLL TOP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

