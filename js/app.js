const approachEL = document.getElementById("approach");
const approachLink = document.getElementById("approachLink");

const projectsEL = document.getElementById("projects");
const projectsLink = document.getElementById("projectsLink");

function scrollTo(el) {
  el.scrollIntoView({ block: "start", behavior: "smooth" });
}

approachLink.addEventListener("click", () => scrollTo(approachEL));
projectsLink.addEventListener("click", () => scrollTo(projectsEL));