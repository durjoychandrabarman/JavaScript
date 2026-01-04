console.log('adde the js file')

/*-- option 2 for  handel event -*/

function halkaBlue(){
    document.body.style.backgroundColor = '#c2d9f3ff'
}

function halkaYelow(){
    document.body.style.backgroundColor = 'Yellow'
}

/*-- option 3 for  handel event  get element by id diye -*/
const makeOrange = document.getElementById('make-orange')
makeOrange.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'orange'
}
/*-- option 4 for  event handel  variable declare and  funtion call -*/
const MakeRedFuntion = function fullRed(){
    document.body.style.backgroundColor = 'red'
}

const makeRed = document.getElementById('btn-make-red')
makeRed.onclick = MakeRedFuntion;