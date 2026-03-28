// ===== Theme Toggle =====
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(mode) {
  if (mode === "light") {
    body.classList.add("light");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.remove("light");
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = body.classList.contains("light") ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
});

// ===== Greeting Message =====
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning 👋";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon 👋";
} else {
  greeting.textContent = "Good evening 👋";
}

// ===== Footer Year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Mobile Menu =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ===== Live Project Search / Filter =====
const projectSearch = document.getElementById("projectSearch");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("emptyState");

projectSearch.addEventListener("input", () => {
  const searchValue = projectSearch.value.toLowerCase().trim();
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    const tags = card.dataset.tags.toLowerCase();
    const matches = title.includes(searchValue) || tags.includes(searchValue);

    if (matches) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  emptyState.hidden = visibleCount !== 0;
});

// ===== Contact Form Validation =====
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

function setStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`;
}

function clearFieldErrors() {
  [nameInput, emailInput, messageInput].forEach((field) => {
    field.classList.remove("input-error");
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearFieldErrors();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "") {
    nameInput.classList.add("input-error");
    setStatus("Please enter your name.", "error");
    return;
  }

  if (emailValue === "") {
    emailInput.classList.add("input-error");
    setStatus("Please enter your email address.", "error");
    return;
  }

  if (!isValidEmail(emailValue)) {
    emailInput.classList.add("input-error");
    setStatus("Please enter a valid email address.", "error");
    return;
  }

  if (messageValue === "") {
    messageInput.classList.add("input-error");
    setStatus("Please enter your message.", "error");
    return;
  }

  if (messageValue.length < 10) {
    messageInput.classList.add("input-error");
    setStatus("Your message should be at least 10 characters long.", "error");
    return;
  }

  setStatus("Message sent successfully! (Demo only)", "success");
  contactForm.reset();

  setTimeout(() => {
    setStatus("", "");
  }, 3500);
});