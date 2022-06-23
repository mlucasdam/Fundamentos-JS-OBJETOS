const clientes = [
    {
        nome: "André",
        cpf: "12312312312",
        dependentes:[{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }],
    },
    {
        nome: "Juliana",
        cpf: "56767867867",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "Guerreiro",
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const Guerreiro = {...fichaGuerreiro,...equipoGuerreiro}
console.table(Guerreiro)

const paciente = {
    nome: "James T",
    idade: 30,
    email: "jt@email.com",
    identificação: "Alpha01259859",
    funcao: "comandante",
    peso: 80.1,
    altura: 1.80,
    calcularIMC:function(){
        return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto: function(){
        console.log(this.nome)
    }
}

let dados = "";
for (let info in paciente){
    if (typeof paciente[info] === "Object"||typeof paciente[info] === "function"){
        continue
    }else{
        dados += console.log(`${info} -> ${paciente[info]}`)
        
    }
}


