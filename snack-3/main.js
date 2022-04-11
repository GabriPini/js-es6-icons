/* Snack 3:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi. */


const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'lupo', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gabbiano', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'volpe', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'aquila', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'lince', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'civetta', famiglia: 'fasianidi', classe: 'uccelli' },

  ]
  console.log(animals)

  const  mammalsAnimals= animals.filter(animal => animal.classe == "mammiferi")

console.log(mammalsAnimals);