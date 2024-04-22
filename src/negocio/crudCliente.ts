import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de Cliente`);
        let nome = this.entrada.receberTexto(`Informe o nome do cliente: `)
        let genero: string;
        do {
            genero = this.entrada.receberTexto(`Informe o gênero ("M" para masculino, "F" para feminino): `).toUpperCase();
            if (genero !== "M" && genero !== "F") {
                console.error(`Formato inválido, por favor entre com "M" para Masculino e "F" para Feminino`);
            }
        } while (genero !== "M" && genero !== "F");
        let cpf = this.entrada.receberNumero(`Informe o número de CPF: `)
        let telefone = this.entrada.receberNumero(`Informe seu número de telefone com DDD: `)
        
        let dataCadastro = new Date()
        let cliente = new Cliente(dataCadastro, nome, cpf, telefone, genero)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído\n`)
    }
    public editarCliente(id: number, novosDados: Partial<Cliente>): void {
        const clienteIndex = this.clientes.findIndex(cliente => cliente.id === id);
        if (clienteIndex !== -1) {
            clientes[clienteIndex]
        }
    }


}
