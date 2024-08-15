const pessoa = {
    primeiroNome: "Pablo",
    sobrenome: "Delgado",
    idade: 16,
    corOlho: "castanho escuro",
    altura: 185,
    dataNascimento: "26/5/2008",
    usaÓculos: false,
    corPele:"CaféComLeite",
    corFavorita: "Vermelho",
    sexo: "Masculino"
};

// Primeira frase ^
console.log("1 - O " + pessoa.primeiroNome + " " + pessoa.sobrenome + " tem " + pessoa.idade + " anos.");

// Alterar objeto
pessoa.sobrenome = "Junior"

// Segunda frase
console.log("2 - O " + pessoa.primeiroNome + " " + pessoa.sobrenome + " tem " + pessoa.idade + " anos.");
