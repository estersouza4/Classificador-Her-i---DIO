// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
// depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:


// Foi criado um array com os nomes dos heróis
let nomeHeroi = [    
    "Arqueiro", 
    "Guerreiro", 
    "Mago",
    "Cavaleiro", 
    "Mistico", 
    "Ninja", 
    "Bárbaro", 
    "Espadachim"
];

let xpHeroi = 5001;
   if (xpHeroi <= 1000) {
console.log("O héroi de nome " + nomeHeroi[0] + " está no nível de ferro")
    }
    else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log("O héroi de nome " + nomeHeroi[1] + " está no nível de bronze")
    }
    else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        console.log("O herói de nome " + nomeHeroi[2] + " está no nível de prata")
    }
    else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        console.log("O herói de nome " + nomeHeroi[3] + " está no nível de ouro")
    }
    else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        console.log("O herói de nome " + nomeHeroi[4] + " está no nível de platina")
    }
    else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        console.log("O herói de nome " + nomeHeroi[5] + " está no nível de Ascendente")
    }
    else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        console.log("O herói de nome " + nomeHeroi[6] + " está no nível de Imortal")
    }
    else if (xpHeroi >= 10001) {
        console.log("O herói de nome " + nomeHeroi[7] + " está no nível de Radiante")
    } 
    else {
        console.log("XP inválido")
    }