async function createPage() {
    await createHardSkillsList();
    await createSoftSkillsList();

    await createJobsList();

    await createDegreesList();

    await createLanguagesList();
}

async function createHardSkillsList(){

    const list = document.getElementById("list-hard");
    if(!list) return;

    const data = translations["hard-skills"]["categories"];

    const html = data.map((element, index) => {

        return `
        <div>
            <h3 data-i18n="hard-skills.categories.${index}.category"></h3>
            <ul>
                ${element.list.map((el, ind) => `<li data-i18n="hard-skills.categories.${index}.list.${ind}"></li>`).join('')}
            </ul>
        </div>`

    }).join('');

    list.innerHTML = html;
}

async function createSoftSkillsList(){

    const list = document.getElementById("list-soft");
    if(!list) return;

    const data = translations["soft-skills"]["categories"];

    const html = data.map((element, index) => {

        return `
        <div>
            <h3 data-i18n="soft-skills.categories.${index}.category"></h3>
            <dl>
                ${element.list.map((el, ind) => `
                    <dt data-i18n="soft-skills.categories.${index}.list.${ind}.name"></dt>
                    <dd data-i18n="soft-skills.categories.${index}.list.${ind}.example"></dd>`).join('')}
            </dl>
        </div>`

    }).join('');

    list.innerHTML = html;
}

async function createJobsList() {

    const list = document.getElementById("jobs-list");
    if(!list) return;

    const data = translations['work-experiences']["jobs"];

    const html = data.map((element, index) => {

        return `
        <li>
            <h2 data-i18n="work-experiences.jobs.${index}.enterprise"></h2>
            <p data-i18n="work-experiences.jobs.${index}.description"></p>
            <h3 data-i18n="work-experiences.jobs.${index}.role"></h3>
            <b> 
                <span data-i18n="work-experiences.jobs.${index}.period"></span>
            </b>
            <p data-i18n="work-experiences.jobs.${index}.summary"></p>
            
        </li>`

    }).join('');

    list.innerHTML = html;
}

async function createDegreesList() {

    const list = document.getElementById("degrees-list");
    if(!list) return;

    const data = translations['degrees']["list"];

    const html = data.map((element, index) => {

        const grade = (element.grade) ? `<p data-i18n="degrees.list.${index}.grade"></p>` : '';
        const established = (element.established) ? `<h3 data-i18n="degrees.list.${index}.established"></h3>` : "";

        return `
        <li>
            <h2 data-i18n="degrees.list.${index}.title"></h2>
            ${established}
            <p data-i18n="degrees.list.${index}.description"></p>
            ${grade}
        </li>`

    }).join('');

    
    list.innerHTML = html;
}

async function createLanguagesList() {

    const list = document.getElementById("languages-list");
    if(!list) return;

    const data = translations['languages']["list"];

    const html = data.map((element, index) => {

        return `
        <li>
            <h3 data-i18n="languages.list.${index}.language"></h3>
            <p data-i18n="languages.list.${index}.level"></p> 
        </li>`

    }).join('');

    
    list.innerHTML = html;
}