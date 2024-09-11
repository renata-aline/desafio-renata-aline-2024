import { animais } from "./animais";
import { zoo } from "./zoo";

class RecintosZoo {
    constructor() {
        this.erro = '';
        this.recintosViaveis = [];
        this.animais = animais;
        this.zoo = zoo;
    }

    analisaRecintos(animal, quantidade) {
        const animalEncontrado = this.animais.find((element) => element.especie === animal);

        if (animalEncontrado && quantidade > 0) {
            let totalEncontrado = [];

            this.zoo.forEach((zooElement) => {
                const animaisExistente = zooElement.animaisExistente.reduce((acumulador, item) => acumulador + item.tamanho, 0);
                const espacoLivre = zooElement.tamanhoTotal - animaisExistente;
                const mesmaCadeiaAlimentar = zooElement.animaisExistente.length ? !!zooElement.animaisExistente.find((element) => element.carnivoro === animalEncontrado.carnivoro) : true;
                let vagasEncontradas = zooElement.bioma.filter((zooBio) => {
                    return (animalEncontrado.bioma.indexOf(zooBio) != -1) && espacoLivre >= quantidade && mesmaCadeiaAlimentar;
                });

                if (vagasEncontradas.length) {
                    totalEncontrado.push({ ...zooElement, ...{ espacoLivre: espacoLivre - animalEncontrado.tamanho * quantidade } });
                };
            });

            if (totalEncontrado.length) {
                this.erro = '';
                totalEncontrado.forEach((element) => {
                    this.recintosViaveis.push(`Recinto ${element.id} (espaço livre: ${element.espacoLivre} total: ${element.tamanhoTotal})`);
                })

            } else {
                this.erro = 'Não há recinto viável';
                this.recintosViaveis = false;
            }
        } else {
            this.erro = !animalEncontrado ? 'Animal inválido' : 'Quantidade inválida';
            this.recintosViaveis = false;
        }

        return this;
    }
}

export { RecintosZoo as RecintosZoo };
