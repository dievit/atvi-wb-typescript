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
        let nomeSocial = this.entrada.receberTexto(`Informe o nome social do cliente: `)
        let cpf = this.entrada.receberNumero(`Informe o número de CPF: `)
        let telefone = this.entrada.receberNumero(`Informe seu número de telefone com DDD: `)
        
        let dataCadastro = new Date()
        let cliente = new Cliente(dataCadastro, nome, cpf, telefone, nomeSocial)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído\n`)
    }
    
}
