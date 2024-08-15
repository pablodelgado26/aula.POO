class Carro {
    constructor(modelo, cor, placa, ano, combustivel, apelido){
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano; 
        this.combustivel = combustivel;
        this.apelido = apelido;
    }
    descricao(){
        console.log(`Minha caranga é do modelo: ${this.modelo}, do ano ${this.ano}, da cor ${this.cor}, minha placa é ${this.placa} e meu carro bebe ${this.combustivel}`);
    }
    buzinar(){
        console.log(`O ${this.apelido} está buzinando: Beep Beep!`);
    }
}

const carro1 = new Carro (`Camaro`, `Amarelo`, `EPP-5C65`, 2014, `Gasolina.`, `Bumblebee.`);
const carro2 = new Carro (`Fusion`, `Preto`, `FAP-3R57`, 2008, `Gasolina.`, `Fusionsinho`)

carro1.descricao();
carro2.descricao();