async function createPage() {
    await createHardSkillsList();
    //await createSoftSkillsList();

    await createJobsList();

    await createDegreesList();
}

async function createHardSkillsList(){

    const list = document.getElementById("list-hard");
    if(!list) return;

    const data = translations['skills']["hard-skills"]["categories"];

    const html = data.map((category, index) => {

        return `
        <div>
            <h3 data-i18n="skills.hard-skills.categories.${index}.category"></h3>
            <ul>
                ${category.list.map((element, ind) => `<li data-i18n="skills.hard-skills.categories.${index}.list.${ind}"></li>`).join('')}
            </ul>
        </div>`

    }).join('');

    list.innerHTML = html;
}

async function createSoftSkillsList(){

    const list = document.getElementById("list-soft");
    if(!list) return;

    const data = translations['skills']["soft-skills"]["categories"];

    const html = data.map((category, index) => {

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

    list.innerHTML = html;
}

async function createJobsList() {

    const list = document.getElementById("jobs-list");
    if(!list) return;

    const data = translations['work-experiences']["jobs"];

    const html = data.map((job, index) => {

        return `
        <li>
            <h2 data-i18n="work-experiences.jobs.${index}.enterprise"></h2>
            <h3 data-i18n="work-experiences.jobs.${index}.role"></h3>
            <p data-i18n="work-experiences.jobs.${index}.summary"></p>
        </li>`

    }).join('');

    list.innerHTML = html;
}

async function createDegreesList() {

    const list = document.getElementById("degrees-list");
    if(!list) return;

    const data = translations['degrees']["degrees"];

    const html = data.map((degree, index) => {

        const aux = (degree.grade) ? `<p data-i18n="degrees.degrees.${index}.grade"></p>` : '';

        return `
        <li>
            <h2 data-i18n="degrees.degrees.${index}.title"></h2>
            <h3 data-i18n="degrees.degrees.${index}.established"></h3>
            ${aux} 
        </li>`

    }).join('');

    
    list.innerHTML = html;
}