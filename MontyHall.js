const { randomInt } = require('crypto')
const readlineSyn = require('readline-sync')

const gates = ['une chevre', 'une chevre', 'une chevre']

let n = gates[randomInt(0, 3)] // choose of player de gates

let carIndex = gates.indexOf(n)
//console.log(`index of car = ${carIndex}`) // check debug

let carHidden = gates.splice(gates.indexOf(n), 1, 'une voiture')
//console.log(`array of gates [${gates}]`) // debug

const door1 = gates[0] // porte 1
const door2 = gates[1] // porte 2
const door3 = gates[2] // porte 3

//on demande au playeur de choisir --------------------------------------

let justTheCar = gates.splice(carIndex, 1)// car mis de coté

//console.log(`array of gates 2 = [${gates}]`) // nouvelle array sans car

const firstOpenDoor = (element) => element > 'une chevre'
let firstDoorIndex = gates.findIndex(firstOpenDoor)
//console.log(`index of first goat door = ${firstDoorIndex}`)

let newGates = gates.splice(firstDoorIndex, 1) // première porte ouverte
console.log(`Dans la première porte que nous ouvrons il y as ... ${newGates}`)

// on rajoute car pour faire un choix final
//console.log(gates)//debug
const lastArray = justTheCar.join() //on remet la voiture en simple string pour la réintegrer au tableau
gates.splice(n, 0, lastArray) //rajoute la voiture
//console.log(gates)//debug

//on demande a la personne si elle veux changer de porte --------------------------------------