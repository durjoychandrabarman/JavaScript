const style = document.querySelectorAll('section')
// console.log(style)
for (const section of style){
    section.style.border= '2px solid steelblue';
    section.style.borderRadius = '10px'
    section.style.backgroundColor = 'lightgray'
    section.style.marginBottom = '10px'
    section.style.padding = '50px'
}

const banglaSong = document.getElementById('bangla-jatiyoSong')
banglaSong.style.textAlign = 'center'
// banglaSong.classList.add('y-greenellow')
banglaSong.classList.add('y-greenellow')
banglaSong.classList.remove('larges-text')

// const sprotsMan  = document.getElementById('sports-man')
// sprotsMan.childNodes;
// console.log(sprotsMan)