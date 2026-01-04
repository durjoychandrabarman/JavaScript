// kothy add korbo
const sportsManList = document.getElementById('sports-man-list');
// ki add korbo
const li = document.createElement('li');
li.innerText = 'Point to be noded '

// added the child 
sportsManList.appendChild(li)


// akhon amra akti section add korbo 

// amra kothay add korbo
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer)

// ki ki Element add korbo
const section = document.createElement('section');
const h1 = document.createElement('h1')
h1.innerText = 'Lionel Messi GOAT Tour India 2025'
section.appendChild(h1)
const ul = document.createElement('ul');
section.appendChild(ul)

const li1 = document.createElement('li');
li1.innerText = '1. kolkata 13 Dec 2025'
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = '2. Hyderabad 13 Dec 2025'
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = '3. Mumbai 14 Dec 2025'
ul.appendChild(li3)

const li4 = document.createElement('li');
li4.innerText = '4. Mew Delhi 15 Dec 2025'
ul.appendChild(li4)

const li5 = document.createElement('li');
li5.innerText = '5. Jamnagar(vantara) hosted by Anant Ambani  16 Dec 2025'
ul.appendChild(li5)

mainContainer.appendChild(section)

// akion amra innner html add korbo

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> MY Dress section</h1>
<ul> 
    <li>T-shirt</li>
    <li>Pent</li>
    <li>Sento Gangi</li>
    <li>Under world boxcer </li>
</ul>
`
mainContainer.appendChild(sectionDress)
