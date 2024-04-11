import Cliente from "../modelo/cliente";
import Listagem from "./listagem";


export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void{
        console.log(`\nListagem de clientes: `)
        this.clientes.forEach((cliente: Cliente) => {
            console.log(`ID: ` +cliente.getCod)
            console.log(`Nome: ` + cliente.nome)
            console.log('Telefone: ' +cliente.getTelefone)
            console.log(`Nome social: ` + cliente.nomeSocial)
            console.log(`CPF: ` + cliente.getCpf);
            console.log(`Data de cadastro: ` + cliente.getDataCadastro)
            console.log(`********************************`)
        })
        console.log(`\n`)
    }
}