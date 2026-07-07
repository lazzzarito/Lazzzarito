(function () {
  "use strict";

  var translations = JSON.parse(
    document.getElementById("i18n-data")?.textContent || "{}"
  );

  var langToggle = document.getElementById("lang-toggle");

  function getCurrentLang() {
    var stored = localStorage.getItem("lang");
    if (stored) return stored;
    return navigator.language && navigator.language.startsWith("es")
      ? "es"
      : "en";
  }

  function setLang(lang) {
    document.documentElement.lang = lang;

    if (langToggle) {
      langToggle.textContent = translations[lang]
        ? translations[lang]["lang." + lang]
        : lang === "en"
          ? "English"
          : "Español";
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", function (e) {
      e.preventDefault();
      var current = getCurrentLang();
      var next = current === "en" ? "es" : "en";
      localStorage.setItem("lang", next);
      setLang(next);
    });
  }

  setLang(getCurrentLang());
})();
