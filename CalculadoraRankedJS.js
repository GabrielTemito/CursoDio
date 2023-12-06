function calcularNivelRankeada(vitorias, derrotas) {
    // Calcular o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;

    // Determinar o nível com base no saldo de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibe a mensagem final
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}
function main() {
    // Chame a função calcularNivelRankeada com valores específicos
    calcularNivelRankeada(200, 5);
}

// Chame a função main para iniciar o programa
main();
