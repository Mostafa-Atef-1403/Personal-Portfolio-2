const projects = [
  { id: 1, name: "1", path: "./assets/projects/1.jpg", type: "graphic" },
  { id: 2, name: "2", path: "./assets/projects/2.jpg", type: "web" },
  { id: 3, name: "3", path: "./assets/projects/3.jpg", type: "branding" },
  { id: 4, name: "4", path: "./assets/projects/4.jpg", type: "graphic" },
  { id: 5, name: "5", path: "./assets/projects/5.jpg", type: "web" },
  { id: 6, name: "6", path: "./assets/projects/6.jpg", type: "branding" },
];

const projectsInsert = document.querySelector(".projects");
const buttons = document.querySelectorAll(".projects-nav .btn");

const menuToggle = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    const filterType = btn.dataset.type;

    renderProjects(filterType);
  });
});

function renderProjects(type = "all") {
  const filtered =
    type === "all" ? projects : projects.filter((p) => p.type === type);

  projectsInsert.innerHTML = filtered
    .map(
      (project) => `
      <div class="project">
        <div class="project-img">
          <img src="${project.path}" alt="${project.name}" />
        </div>
        <div class="project-overley">
          <button><i class="bi bi-cursor-fill"></i></button>
        </div>
      </div>
    `
    )
    .join("");
}

renderProjects();

// type animation

const textArray = ["Developer.", "Designer.", "Freelancer."];
const typingSpan = document.querySelector(".typing span");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = textArray[textIndex];

  if (!isDeleting && charIndex < current.length) {
    typingSpan.textContent += current.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && charIndex > 0) {
    typingSpan.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeEffect, 500);
    }
  }
}

typeEffect();
