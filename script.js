// Mobile navigation toggle
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Interactive job role comparison
const roleDetails = {
  support: {
    level: "ENTRY-LEVEL", title: "IT Support Technician",
    photo: "images/IT%20Support%20Technician.jpg",
    focus: "User support and first-line troubleshooting.",
    tasks: ["Answer help desk requests", "Set up computers and accounts", "Escalate complex incidents"],
    difference: "Focuses on the user's immediate issue and resolves common problems before escalating."
  },
  admin: {
    level: "INTERMEDIATE", title: "System Administrator",
    photo: "images/System%20Administrator1.jpg",
    focus: "Reliable, secure day-to-day IT operations.",
    tasks: ["Maintain servers and services", "Manage access, updates, and backups", "Monitor performance and availability"],
    difference: "Owns the systems behind the service, not only the individual user's request."
  },
  engineer: {
    level: "ADVANCED", title: "Systems Engineer",
    photo: "images/Systems%20Engineer.jpg",
    focus: "Infrastructure design, integration, and automation.",
    tasks: ["Plan system architecture", "Automate deployments and maintenance", "Improve scalability and resilience"],
    difference: "Spends more time designing and improving systems and solving complex infrastructure challenges."
  }
};

const roleButtons = document.querySelectorAll(".role-button");
const roleLevel = document.getElementById("roleLevel");
const roleTitle = document.getElementById("roleTitle");
const rolePhoto = document.getElementById("rolePhoto");
const roleFocus = document.getElementById("roleFocus");
const roleTasks = document.getElementById("roleTasks");
const roleDifference = document.getElementById("roleDifference");

roleButtons.forEach((button) => {
  button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
  button.addEventListener("click", () => {
    const role = roleDetails[button.dataset.role];
    if (!role) return;
    roleButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    roleLevel.textContent = role.level;
    roleTitle.textContent = role.title;
    rolePhoto.src = role.photo;
    rolePhoto.alt = role.title;
    roleFocus.textContent = role.focus;
    roleDifference.textContent = role.difference;
    roleTasks.replaceChildren();
    role.tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task;
      roleTasks.appendChild(li);
    });
  });
});
