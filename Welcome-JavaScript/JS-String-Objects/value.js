/**object er vitor kone property er valu ke kivabe change korbo */

const person = {
    name: 'Durjoy chandra barman',
    old : 20,
    birthDate:'2005/01/29',
    student : true,
    'Hi is marrid':'Not',
    her_fav_food :'mango'
}
person.old =22;

person['her_fav_food'] = 'amer kono fav food nai ami vat beshi vlo bashi'
// console.log(person);

const personFullname = 'name';
person[personFullname ]= 'durjoy chandra barman'
console.log(person)