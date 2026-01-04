const main = document.getElementById('main-container');
const newSection = document.createElement('section')

newSection.innerHTML = `
    <h1>My new section added </h1>
    <p> Inner html er mardhoma new section add </p>
    <ul>
        <li> Added The First Item</li>
        <li> added complet this Item of the Mark</li>
        <li> added all the section</li>
    </ul>

`
main.appendChild(newSection)