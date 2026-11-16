(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      nav.classList.toggle("open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  document.querySelectorAll("[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      const serviceSelect = document.querySelector("#service-select");
      if (serviceSelect) {
        const requested = link.dataset.service;
        const option = [...serviceSelect.options].find((item) => item.text === requested);
        if (option) serviceSelect.value = option.value;
      }
    });
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#quote-form");
  const status = document.querySelector("#form-status");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const company = String(data.get("company") || "").trim();
      const service = String(data.get("service") || "Not specified").trim();
      const message = String(data.get("message") || "").trim();
      const subject = `Engineering enquiry from ${name}`;
      const body = [
        "Hello FuturegenX Design Technology,",
        "",
        "I'd like to discuss an engineering project.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Service: ${service}`,
        "",
        "Project details:",
        message
      ].join("\n");
      const mailto = `mailto:futuregenx3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      if (status) status.textContent = "Opening your email app with the enquiry details. Please review and send the email to submit your request.";
      window.location.href = mailto;
    });
  }
})();

document.querySelectorAll(".year").forEach((el) => { el.textContent = new Date().getFullYear(); });
