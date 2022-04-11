/* 
Snack 2:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
 */

const randomWords = ['dromedario','Appalachia','BRUNO','MONEY']
console.log(randomWords)
const capitalizedWord = [capitalize(randomWords)]
console.log(capitalizedWord)

function capitalize(array) {
    return array.map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
        
    });
}
  
