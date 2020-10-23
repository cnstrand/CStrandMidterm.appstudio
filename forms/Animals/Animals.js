// create an array name myAnimals with these animals
let myAnimals = ['dog', 'cat', 'horse', 'meerkat']
console.log(myAnimals)

// get a new animal from the user and add it to the ene of the array
let newAnimal = prompt(`please enter a new animal`)
let newAnimal1 = newAnimal.toUpperCase()
console.log(newAnimal1)
let allAnimals = myAnimals.push(`newAnimal1`)
console.log(allAnimals)

//output last animal in the array using an alert
let last_element = allAnimals[allAnimals.length - 1];
alert("The last animal entered was:" + last_element)
