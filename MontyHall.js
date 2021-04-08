const { randomInt } = require('crypto')
const readlineSyn = require('readline-sync')
let onPlay = true
//TODO : presentation du jeux, regles

while(onPlay === true){
    let gates = ['une chevre', 'une chevre', 'une chevre']
    let n = gates[randomInt(0, 3)] // choose of player de gates
    let carIndex = gates.indexOf(n)
    let carHidden = gates.splice(gates.indexOf(n), 1, 'une voiture')
    const doors = ['1','2','3']
        gates[0] = doors[0] // porte 1
        gates[1] = doors[1]// porte 2
        gates[2] = doors[2] // porte 3

    //on demande au playeur de choisir --------------------------------------

    let question = Number(readlineSyn.keyInSelect(doors, 'Veuillez choisir une porte en selectionnant le numéro de la porte que vous souhaitez'))

        console.log(`\nThank you, waiting ....\n`)

    let justTheCar = gates.splice(carIndex, 1)// car mis de coté

    //console.log(`array of gates 2 = [${gates}]`) // nouvelle array sans car

    const firstOpenDoor = (element) => element > 'une chevre'
    let firstDoorIndex = gates.findIndex(firstOpenDoor)

    //console.log(`index of first goat door = ${firstDoorIndex}`)

    let newGates = gates.splice(firstDoorIndex, 1) // première porte ouverte
        console.log(`Dans la première porte que nous ouvrons il y as ... une chevre`)

    // on rajoute car pour faire un choix final

    const lastArray = justTheCar.join() //on remet la voiture en simple string pour la réintegrer au tableau
        gates.splice(n, 0, lastArray) //rajoute la voiture

    const yesOrNo = ['1', '2']
        gates[0] = yesOrNo[0]
        gates[1] = yesOrNo[1]
    //on demande a la personne si elle veux changer de porte --------------------------------------
    let lastChoice = Number(readlineSyn.keyIn(yesOrNo, `Would you like change you'r door ? (Yes 1, No 2)`))
        lastChoice = secondChoice
    if(lastChoice === 2){
    if(question === justTheCar){
        console.log(`You have win ${justTheCar} !`)
    } else {
        console.log(`Sorry this is the goat ... I hope you like this milk !`)
    }
    }
if(lastChoice === 1){
    let changement = indexOf(gates) - 1
    if(changement === justTheCar){
        console.log(`You have win ${justTheCar} !`)
    } else {
        console.log(`Sorry this is the goat ... I hope you like this milk !`)
    }

}
}

MontyHall()