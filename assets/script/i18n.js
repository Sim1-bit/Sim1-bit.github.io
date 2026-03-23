let translations = {};

const components = ["header", "skills", "work-experiences", "degrees"];


async function loadLanguage(lang) {
  translations = {};
  for(const comp of components){
      const res = await fetch(`assets/data/${lang}/${comp}.json`);
      const data = await res.json();

      translations[comp] = data;
  }
}


function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const path = element.dataset.i18n.split(".");

    const translation = path.reduce((base, key) => {
      return (base && base[key] !== undefined) ? base[key] : undefined;
    }, translations);

    if(translation !== undefined && typeof translation === 'string')
      element.innerText = translation;
  });
}

const savedLang = localStorage.getItem("lang") || "it";
loadLanguage(savedLang);