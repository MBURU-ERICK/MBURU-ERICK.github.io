// Afribyte website configuration: replace these placeholders before publishing.
const AFRIBYTE_WHATSAPP_NUMBER = "254708231994"; // Example format: 254712345678 (digits only)
const AFRIBYTE_EMAIL = "mburuerick29@gmail.com";
const AFRIBYTE_DISPLAY_PHONE = "+254 708231994";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.textContent = "☰";
}));
document.querySelectorAll("[data-service]").forEach(link => link.addEventListener("click", () => {
  const select = document.getElementById("service");
  for (const option of select.options) if (option.text === link.dataset.service) { select.value = option.value; break; }
}));
document.getElementById("year").textContent = new Date().getFullYear();
if (!AFRIBYTE_EMAIL.includes("example.com")) document.getElementById("displayEmail").textContent = AFRIBYTE_EMAIL;
if (!AFRIBYTE_DISPLAY_PHONE.includes("XXX")) document.getElementById("displayPhone").textContent = AFRIBYTE_DISPLAY_PHONE;

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contactInfo").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");
  const whatsappReady = /^\d{10,15}$/.test(AFRIBYTE_WHATSAPP_NUMBER) && !AFRIBYTE_WHATSAPP_NUMBER.includes("X");
  const emailReady = AFRIBYTE_EMAIL.includes("@") && !AFRIBYTE_EMAIL.includes("example.com");
  if (whatsappReady) {
    const text = `Hello Afribyte,\n\nMy name is ${name}.\nContact: ${contact}\nService: ${service}\n\nDetails: ${message}`;
    status.textContent = "Opening WhatsApp. Review your message and press Send there.";
    window.open(`https://wa.me/${AFRIBYTE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  } else if (emailReady) {
    const body = `Hello Afribyte,\n\nMy name is ${name}.\nContact: ${contact}\nService: ${service}\n\nDetails: ${message}`;
    window.location.href = `mailto:${AFRIBYTE_EMAIL}?subject=${encodeURIComponent("Afribyte enquiry: " + service)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Your email app should open. Review the message and send it.";
  } else {
    status.textContent = "Please configure your WhatsApp number or email address in script.js first. Nothing has been sent.";
  }
});
