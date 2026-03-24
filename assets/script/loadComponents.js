async function loadAllComponents() {
  await loadComponent("header", "assets/components/header.html");
  await loadComponent("skills", "assets/components/skills.html");
  await loadComponent("work-experiences", "assets/components/work-experiences.html");
  await loadComponent("degrees", "assets/components/degrees.html");
  await loadComponent("languages", "assets/components/languages.html")

  await createPage();

  await applyTranslations();
}

async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}


loadAllComponents();