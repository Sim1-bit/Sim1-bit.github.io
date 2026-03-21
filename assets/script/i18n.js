let translations = {};

const components = ["header"];


async function loadLanguage(lang) {
    translations = {};
    for(const comp of components){
        const res = await fetch(`assets/data/${lang}/${comp}.json`);
        const data = await res.json();

        translations[comp] = data;
    }
    applyTranslations();
}


function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const [comp, key] = el.dataset.i18n.split(".");

    if (translations[comp] && translations[comp][key]) {
      el.innerText = translations[comp][key];
    }
  });
}

const savedLang = localStorage.getItem("lang") || "it";
loadLanguage(savedLang);