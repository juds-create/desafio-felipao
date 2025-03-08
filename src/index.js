const nomeHeroi = "juds-espadachim"
const quantidadeDeXP = "1000"
let nivel;

if(quantidadeDeXP < 1000){
    nivel = "Ferro"
} else if(quantidadeDeXP <=2000){
    nivel = "Bronze"
} else{
    nivel = "evoluindo"
}

console.log("o heroi de nome " + nomeHeroi + " esta no nivel " + nivel);
