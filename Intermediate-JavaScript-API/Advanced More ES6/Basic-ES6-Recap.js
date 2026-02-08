const about = {
    name : 'Durjoy',
    age : 20
}
// Object.freeze(about)
// Object.seal(about)

about.age = 22;
console.log(about)
const {name , age} = about;
console.log(name)
// console.log(Object.keys(about))
const someName = ['bangladesh', 'india','munbai']
const [bd,ind,mum] = someName;
console.log(bd,ind,mum)
const bdAnthem = `amer soner ${bd} ami tomy valo bashi`
console.log(bdAnthem)

for (const key in about){
    const value = about[key];
    console.log(key ,value)
}
