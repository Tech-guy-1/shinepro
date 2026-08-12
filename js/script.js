/* Shine Pro — shared site behaviour
   Kept intentionally minimal: a mobile nav toggle, the footer year,
   and client-side handling for the contact form. No animation libraries,
   no scroll effects. */

document.addEventListener("DOMContentLoaded", function () {
  /* Mobile navigation toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    /* Close the mobile menu after a link is chosen */
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Footer year */
  var yearEls = document.querySelectorAll("[data-current-year]");
  yearEls.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Contact form — sends the request to Shine Pro on WhatsApp.
     The business WhatsApp number below matches the phone number shown
     in the Contact section. Every field the person filled in is included
     in the pre-filled WhatsApp message, in full, so nothing is left out. */
  var WHATSAPP_NUMBER = "265990458378"; // +265 990 458 378, international format, no leading +

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var getVal = function (id) {
        var el = form.querySelector("#" + id);
        return el ? el.value.trim() : "";
      };

      var name = getVal("name");
      var phone = getVal("phone");
      var email = getVal("email");
      var service = getVal("service");
      var propertyType = getVal("property-type");
      var message = getVal("message");

      var lines = [
        "New quote request — Shine Pro website",
        "",
        "Name: " + name,
        "Phone: " + phone,
        "Email: " + email,
        "Service needed: " + service,
        "Property type: " + propertyType,
        "Details: " + message
      ];

      var whatsappText = encodeURIComponent(lines.join("\n"));
      var whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + whatsappText;

      var fields = form.querySelector(".form-fields");
      var success = document.getElementById("form-success");
      var successName = document.getElementById("form-success-name");

      if (successName && name) {
        successName.textContent = name.split(" ")[0];
      }
      if (fields) fields.classList.add("is-hidden");
      if (success) success.classList.add("is-visible");

      form.reset();

      /* Open WhatsApp with the message ready to send. */
      window.open(whatsappUrl, "_blank", "noopener");
    });
  }
});
