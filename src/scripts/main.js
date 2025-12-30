const seeProjectsBtns = document.querySelectorAll(".seeProjectsBtn");
const contactBtns = document.querySelectorAll(".contactBtn");
const projects = document.querySelector("#projects");
const contacts = document.querySelector("#contacts");
const seeAboutBtn = document.querySelector("#seeAboutBtn");
const seeskillsBtn = document.querySelector("#seeskillsBtn");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const hambourgMenu = document.querySelector("#hambourgMenu");
const menu = document.querySelector("#menu");
let toggleMenu = false;

seeProjectsBtns?.forEach((seeProjectsBtn) => {
  seeProjectsBtn.addEventListener("click", function (event) {
    event.preventDefault();

    projects.scrollIntoView({
      behavior: "smooth",
    });
  });
});

contactBtns?.forEach((contactBtn) => {
  contactBtn?.addEventListener("click", function (event) {
    event.preventDefault();

    contacts.scrollIntoView({
      behavior: "smooth",
    });
  });
});

seeAboutBtn?.addEventListener("click", function (event) {
  event.preventDefault();

  about.scrollIntoView({
    behavior: "smooth",
  });
});

seeskillsBtn?.addEventListener("click", function (event) {
  event.preventDefault();

  skills.scrollIntoView({
    behavior: "smooth",
  });
});

hambourgMenu?.addEventListener("click", function (event) {
  event.preventDefault();
  toggleMenu = !toggleMenu;

  menu.classList.toggle("menu-open", toggleMenu);
  menu.classList.toggle("hidden", !toggleMenu);
  console.log(menu);
});
