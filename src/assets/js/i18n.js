(function () {
  "use strict";

  const translations = JSON.parse(
    document.getElementById("i18n-data")?.textContent || "{}"
  );

  const langToggle = document.getElementById("lang-toggle");
  const langCurrent = document.getElementById("lang-current");

  function getCurrentLang() {
    return localStorage.getItem("lang") || "en";
  }

  function setLang(lang) {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    if (langCurrent) {
      langCurrent.textContent = lang === "en" ? "🇺🇸 EN" : "🇪🇸 ES";
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", function (e) {
      e.preventDefault();
      const current = getCurrentLang();
      const next = current === "en" ? "es" : "en";
      setLang(next);
    });
  }

  setLang(getCurrentLang());
})();
