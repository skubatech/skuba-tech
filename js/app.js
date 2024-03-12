const approachEL = document.getElementById("approach");
const approachLink = document.getElementById("approachLink");
const projectsEL = document.getElementById("projects");
const projectsLink = document.getElementById("projectsLink");
const contactsLink = document.getElementById("contactsLink");

const approachStep = document.querySelectorAll('.approach_step');

const aboutWork = document.querySelectorAll('.about_work');

const modal = document.querySelector(".modalWrapper");
const modalCross = document.querySelector(".modal_close");

function scrollTo(el) {
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

approachLink.addEventListener("click", () => scrollTo(approachEL));
projectsLink.addEventListener("click", () => scrollTo(projectsEL));
contactsLink.addEventListener("click", () => openModal());

modalCross.addEventListener("click", () => closeModal());

approachStep.forEach((item, i) => { 
  item.addEventListener("click", (event) => changeStep(event, i))
});
