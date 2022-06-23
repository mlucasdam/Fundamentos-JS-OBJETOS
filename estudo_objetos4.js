function Cliente (nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo 
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const lucas = new Cliente ("lucas","12345678913","email@emai.com",100)

console.table(lucas)

function ClientePoupanca(nome,cpf,email,saldo,saldopoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldopoup = saldopoup
}

const Raquele = new ClientePoupanca ("Raquele", "12365498715", "emaildoemail@email.com",100,200)
console.table(Raquele)

ClientePoupanca.prototype.depositarpoup = function(valor){
    this.saldopoup += valor
}

Raquele.depositarpoup(500)
console.log(Raquele.saldopoup)