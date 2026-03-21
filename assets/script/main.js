async function createPage() {
    await createHardSkillsList();
    await createSoftSkillsList();
}

async function createHardSkillsList(){
    const res = await fetch(`assets/data/it/skills.json`);
    const data = await res.json();
    const hard_skill_categories = data["hard-skills"]["categories"];

    const html = hard_skill_categories.map((category, index) => {

        return `
        <div>
        <h3 data-i18n="skills.hard-skills.categories.${index}.category"></h3>
        <ul>
            ${category.list.map((element, ind) => `<li data-i18n="skills.hard-skills.categories.${index}.list.${ind}"></li>`).join('')}
        </ul>
        </div>`

    }).join('');

    const hard_list = document.getElementById("list-hard");
    hard_list.innerHTML = html;
}

async function createSoftSkillsList(){
    const res = await fetch(`assets/data/it/skills.json`);
    const data = await res.json();
    const soft_skill_categories = data["soft-skills"]["categories"];

    const html = soft_skill_categories.map((category, index) => {

        return `
        <div>
        <h3 data-i18n="skills.soft-skills.categories.${index}.category"></h3>
        <dl>
            ${category.list.map((element, ind) => `
                <dt data-i18n="skills.soft-skills.categories.${index}.list.${ind}.name"></dt>
                <dd data-i18n="skills.soft-skills.categories.${index}.list.${ind}.example"></dd>`).join('')}
        </dl>
        </div>`

    }).join('');

    const soft_list = document.getElementById("list-soft");
    soft_list.innerHTML = html;
}