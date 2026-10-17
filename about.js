"use strict";
const toggle = document.getElementById("mobile-toggle");
const mobile = document.getElementById("mobile-nav");
if (toggle && mobile) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    mobile.hidden = isOpen;
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  });
  mobile.addEventListener("click", (e) => { if (e.target.closest("a")) { mobile.hidden=true; toggle.setAttribute("aria-expanded", "false"); } });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { mobile.hidden=true; toggle.setAttribute("aria-expanded", "false"); }});
}
document.getElementById("year").textContent = String(new Date().getFullYear());
