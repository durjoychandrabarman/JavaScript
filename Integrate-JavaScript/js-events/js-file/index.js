// java script event handlar 
// 📌step : 1 
 function makeBlue() {
            document.body.style.backgroundColor = 'blue'
        }

        function textCenter(){
            document.body.style.textAlign = 'center'
        }
//📌 Step - 2  Id er mardhome seclec kora
const makeYellow = document.getElementById('make-yellow')
        makeYellow.onclick = function makeBlue(){
            document.body.style.backgroundColor ='Yellow'
        }

// 📌 <!-- step - 3 diffrend syestem ata beshi use korbo na -->
 const makePurple = document.getElementById('Make-parple');
        makePurple.onclick = purple;

        function purple(){
            document.body.style.backgroundColor = 'purple'
        }

// <!--📌 option - 4  use     addEventListener -->
document.getElementById('make-gold')
            .addEventListener('click',function(){
                document.body.style.backgroundColor = 'gold'
            })