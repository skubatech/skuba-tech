const approachEL = document.getElementById("approach");
const approachLink = document.getElementById("approachLink");
const approachLinkBurger = document.getElementById("approachLinkBurger");
const projectsEL = document.getElementById("projects");
const projectsLink = document.getElementById("projectsLink");
const projectsLinkBurger = document.getElementById("projectsLinkBurger");
const contactsLink = document.getElementById("contactsLink");
const contactsLinkBurger = document.getElementById("contactsLinkBurger");

const approachStep = document.querySelectorAll('.approach_step');

const aboutWork = document.querySelectorAll('.about_work');

const modal = document.querySelector(".modalWrapper");
const modalCross = document.querySelector(".modal_close");

const burger = document.querySelector(".burger");
const burgerNav = document.querySelector(".burger_nav");
const burgerNavBack = document.querySelector(".burger_nav_wrapper");
const burgerMenu = document.getElementById("burger_menu");

function scrollTo(el, isBurger) {
  if(isBurger) {
    closeBurger();
  }
  el.scrollIntoView({ block: "start", behavior: "smooth" });
}

function changeVisibleAboutWork(index) {
  aboutWork.forEach((item, i) => {
    if(index === i) {
      item.classList.remove('hidden_step');
    }
    else {
      item.classList.add('hidden_step');
    }
  })
}

function changeStep(event, index) {
  approachStep.forEach((item) => item.classList.remove('activeStep'));
  event.currentTarget.classList.add('activeStep');

  changeVisibleAboutWork(index);
}

function openModal() {
  modal.classList.remove('disable');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('disable');
  document.body.style.overflow = "unset";
  document.body.style.overflowX = "hidden";
}

function openBurger() {
  burger.classList.toggle("active");
  burgerNav.classList.toggle("open_burger");
  burgerNavBack.classList.toggle("burger_nav_back");
  
  if(!burgerMenu.checked) {
    document.body.style.overflow = "hidden";
  }
  else {
    document.body.style.overflow = "unset";
  }
}

function closeBurger() {
  burger.classList.toggle("active");
  burgerNav.classList.toggle("open_burger");
  burgerNavBack.classList.toggle("burger_nav_back");
  document.body.style.overflow = "unset";
  document.body.style.overflowX = "hidden";
}

approachLink.addEventListener("click", () => scrollTo(approachEL));
approachLinkBurger.addEventListener("click", () => scrollTo(approachEL, true));
projectsLink.addEventListener("click", () => scrollTo(projectsEL));
projectsLinkBurger.addEventListener("click", () => scrollTo(projectsEL, true));
contactsLink.addEventListener("click", () => openModal());
contactsLinkBurger.addEventListener("click", () => {
  openModal();
  closeBurger();
});

modalCross.addEventListener("click", () => closeModal());

approachStep.forEach((item, i) => { 
  item.addEventListener("click", (event) => changeStep(event, i));
});

burger.addEventListener("click", () => openBurger());