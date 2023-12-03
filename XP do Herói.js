// Declaração das variáveis
const nome = "Temito";
const xp = 1000000;

// Estrutura de decisão
const nivel = xp >= 10001 ? "Radiante" :
xp >= 9001 ? "Imortal" :
xp >= 8001 ? "Ascendente" :
xp >= 7001 ? "Platina" :
xp >= 6001 ? "Ouro" :
xp >= 5001 ? "Prata" :
xp >= 2001 ? "Bronze" : "Ferro";

// Exibição da mensagem
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);


