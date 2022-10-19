/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let kenobiAttack = 25;
let skywalkerAttack = 35;

if(kenobiAttack > skywalkerAttack){
    console.log('Obiwan has a better attack')
} else if(kenobiAttack < skywalkerAttack){
    console.log('Anakin has the better attack')
} else {
    console.log('Obiwan and Anakin have the same attack')
}

let kenobiHealth = 100;
let kenobiDefense = 0;

if(skywalkerAttack >= kenobiHealth){
    console.log('One hit kill dealt by Anakin')
} else {
    kenobiHealth -= skywalkerAttack
    console.log(`Obiwan's health is now ${kenobiHealth}`)
    
}

kenobiDefense += 30;

if((kenobiHealth + 50) >= 100){
    kenobiHealth = 100
} else {
    kenobiHealth += 50
}
kenobiAttack = 
for(let i = 0;i < 50; i++){
    kenobiHealth -= (skywalkerAttack - kenobiDefense)
    if(kenobiHealth <= 0){
        console.log('Obiwan Kenobi is a weak piece of trash and is now dead')
        break
    } else{
        console.log(kenobiHealth)
    }
    }

    while(kenobiHealth > 0){

    }
