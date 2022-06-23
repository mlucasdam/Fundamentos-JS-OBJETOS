const cliente = {
    nome: "Lucas",
    idade: 23,
    cpf: "12345678912",
    email: "emaildoemail@email.com",
    fones: ["551998787546", "551932136548"],
    dependentes: [
        {
        nome: "Raquele lima",
        parentesco: "Namorada",
        dataNasc: "17/03/1995"
        },
        {
        nome: "Vitor Hugo",
        parentesco: "Irmão",
        dataNasc: "29/12/2012"
        }],

    saldo: 100,
    depositar: function (valor)
    {
        this.saldo += valor 
    }

}

const dependenteMaisNovo = cliente.dependentes.filter (dependente => dependente.dataNasc === "29/12/2012")

console.log(dependenteMaisNovo)
console.log(dependenteMaisNovo[0].nome)

console.log(cliente.saldo)

cliente.depositar(30)
console.log(cliente.saldo)

let relatorio = "";

for (let info in cliente){
    if (typeof cliente[info] === "Object" || typeof cliente[info] === "function"){
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
    

}

console.log(relatorio)