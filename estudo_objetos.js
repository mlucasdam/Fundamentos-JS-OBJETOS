const cliente = {
    nome: "Lucas",
    idade: 23,
    cpf: "12345678912",
    email: "emaildoemail@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

const chaves  = ["nome", "idade", "cpf", "email"]
console.log (cliente[chaves[0]])

chaves.forEach (info => console.log(cliente[info]))

console.log(cliente);
cliente.fone = "94956846578"
console.log(cliente);

cliente.fone = "hahahhahahahah"
console.log(cliente)

const objPersonagem = {
    nome: "Gandalf",
    classe: "Mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "Mago"
    },
    status: "desaparecido"
}

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado)
console.log(objPersonagem)



