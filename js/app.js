const approachEL = document.getElementById("approach");
const approachLink = document.getElementById("approachLink");
const projectsEL = document.getElementById("projects");
const projectsLink = document.getElementById("projectsLink");
const contactsEL = document.getElementById("contacts");
const contactsLink = document.getElementById("contactsLink");

const approachStep = document.querySelectorAll('.approach_step');

const aboutWork = document.querySelectorAll('.about_work');

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

approachLink.addEventListener("click", () => scrollTo(approachEL));
projectsLink.addEventListener("click", () => scrollTo(projectsEL));
contactsLink.addEventListener("click", () => scrollTo(contactsEL));

approachStep.forEach((item, i) => { 
  item.addEventListener("click", (event) => changeStep(event, i))
});
