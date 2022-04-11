/* 
Snack 4:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
 */

const people = [
    { name: 'Gabriele', surname: 'Pini', age: '24' },
    { name: 'Grogu', surname: 'Mandalorian', age: '6' },
    { name: 'TheBoy', surname: 'Mando', age: '2' },
    { name: 'Yoda', surname: 'Jedi', age: '200' },
    { name: 'Luke', surname: 'Skywalker', age: '23' },
    { name: 'Boba', surname: 'Fett', age: '36' },
    { name: 'Obi-Wan', surname: 'Kenobi', age: '57' },
  ]

console.log(people)

let driverStatus = []

let canDrive = people.filter((person) => {
    if(person.age > 18 ){
        driverStatus.push (`${person.name} ${person.surname} PUO GUIDARE!`);
        return true;

    }
    driverStatus.push (`${person.name} ${person.surname} NON PUO ASSOLUTAMENTE GUIDARE!`)

})
console.log(driverStatus)
