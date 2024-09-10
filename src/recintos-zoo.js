import { animais } from "./animais";

class RecintosZoo {
    constructor() {
        this.erro = '';
        this.recintosViaveis = [];
        this.animais = animais;
    }

    analisaRecintos(animal, quantidade) {
        const animalEncontrado = this.animais.find((element) => element.especie === animal);


        if (animalEncontrado && quantidade > 0){

            
            this.erro = ''; 
            this.recintosViaveis = ['recinto válido']; 
            
        } else {
            this.erro = !animalEncontrado ? 'Animal inválido' : 'Quantidade inválida';
            this.recintosViaveis = false;
        }

        return this;
    }
}

export { RecintosZoo as RecintosZoo };
