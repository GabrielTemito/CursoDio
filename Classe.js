// Definindo a classe Heroi
class Heroi {
    // Construtor da classe com as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        // Determinando o tipo de ataque com base no tipo do herói
        let ataque;
        switch (this.tipo) {
            case "ceifador das sombras":
                ataque = "corte ceifador";
                break;
            case "guerreiro ceifador":
                ataque = "ceifa da carnificina";
                break;
            case "monge":
                ataque = "onda sônica";
                break;
            case "ninja":
                ataque = "shuriken laminada";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Exemplo de uso das classes
// Criando instâncias de diferentes tipos de heróis
const heroi1 = new Heroi("Kayn", 1000, "ceifador das sombras");
const heroi2 = new Heroi("Rhaast", 35, "guerreiro ceifador");
const heroi3 = new Heroi("Zed", 80, "ninja");
const heroi4 = new Heroi("Lee Sin", 30, "monge");

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
