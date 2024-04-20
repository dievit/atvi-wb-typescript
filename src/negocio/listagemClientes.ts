import Cliente from "../modelo/cliente";
import Listagem from "./listagem";


export default class ListagemClientes extends Listagem {
    private clientes: Cliente[];
    constructor(clientes: Cliente[]) {
        super()
        this.clientes = clientes
    }
    public listar(): void{
        console.log(`\nListagem de clientes: `)
        this.clientes.forEach((cliente: Cliente) => {
            console.log(`ID: ` +cliente.getCod())
            console.log(`Nome: ` + cliente.nome)
            console.log('Telefone: ' +cliente.getTelefone())
            console.log(`Genero: ` + cliente.getGenero())
            console.log(`CPF: ` + cliente.getCpf());
            console.log(`Data de cadastro: ` + cliente.getDataCadastro())
            console.log(`********************************`)
        })
        console.log(`\n`)
    }

    public listarClienteQtd(): Cliente[] {
        return this.clientes.slice().sort((a, b) => b.getQtdComprada() - a.getQtdComprada());
    }

    public listarClientePorValor(): Cliente[] {
        return this.clientes.slice().sort((a, b) => b.getValorGasto() - a.getValorGasto());
    }
}