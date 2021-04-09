const { randomInt } = require('crypto')
const readlineSyn = require('readline-sync')
let onPlay = true
//TODO : presentation du jeux, regles

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
    //on demande a la personne si elle veux changer de porte --------------------------------------
    let lastChoice = Number(readlineSyn.keyInSelect(yesOrNo, `Voulez-Vous changer de porte ? ( Oui : 1 / Non : 2 s)`))

    if(lastChoice === 2){
        console.log(`Vous avez changez de porte`)
        let changement = question + 1
            if(changement === carIndex){
                console.log(`You have win ${lastArray} !`)
            } else {
                console.log(`Sorry this is the goat ... I hope you like this milk !`)
            }
    }
    if(lastChoice === 1){
        console.log(`Vous gardez la même porte qu'au début`)
        let final = question
        if(final === carIndex){
            console.log(`You have win ${justTheCar} !`)
        } else {
        console.log(`Sorry this is the goat ... I hope you like this milk !`)
        }
    }
    if(question === 0 || lastChoice === 0){
        console.log(`Vous avez souhaitez quitter le jeu`)
        process.exit(1)
    }
    
