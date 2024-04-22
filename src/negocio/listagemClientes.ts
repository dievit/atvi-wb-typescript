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
    public listar5(): void {
        this.clientes.forEach((cliente: Cliente) => {
            console.log(`ID: `, cliente.getCod());
            console.log(`Nome: `, cliente.getTelefone());
            console.log(`Genero: `, cliente.getGenero());
            console.log(`CPF: ` + cliente.getCpf());
            console.log(`Data de cadastro: ` + cliente.getDataCadastro());
            console.log(`Total Gasto R$`, cliente.getValorGasto());
            console.log(`********************************`);
        })
    }

    public listarMais10(): void {
        this.clientes.forEach((cliente: Cliente) => {
            console.log(`ID: `, cliente.getCod());
            console.log(`Nome: `, cliente.getTelefone());
            console.log(`Genero: `, cliente.getGenero());
            console.log(`CPF: ` + cliente.getCpf());
            console.log(`Data de cadastro: ` + cliente.getDataCadastro());
            console.log(`Total Comprado em Qtd`, cliente.getQtdComprada());
            console.log(`********************************`);

        })
    }

    public listarMenos10(): void {
        this.clientes.forEach((cliente: Cliente) => {
            console.log(`ID: `, cliente.getCod());
            console.log(`Nome: `, cliente.getTelefone());
            console.log(`Genero: `, cliente.getGenero());
            console.log(`CPF: ` + cliente.getCpf());
            console.log(`Data de cadastro: ` + cliente.getDataCadastro());
            console.log(`Total Comprado em Qtd`, cliente.getQtdComprada());
            console.log(`********************************`);
        })
    }
}