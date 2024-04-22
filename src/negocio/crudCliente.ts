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

    public updateCliente(cod: number): void {
        const clienteIndex = this.clientes.findIndex(cliente => cliente.getCod() === cod);

        if(clienteIndex !== -1) {
            const cliente = this.clientes[clienteIndex];
            console.log(`Cliente encontrado: ${cliente.nome}`);

            let novoNome = this.entrada.receberTexto(`Informe o novo nome do cliente: `);
            let novoGenero = this.entrada.receberTexto(`Informe o novo gênero do cliente: `);
            let novoCpf = this.entrada.receberNumero(`Informe o novo CPF do cliente: `);
            let novoTelefone = this.entrada.receberNumero(`Informe o novo Telefone do cliente: `);

            cliente.setNome(novoNome);
            cliente.setGenero(novoGenero);
            cliente.setCpf(novoCpf);
            cliente.setTelefone(novoTelefone);

            console.log(`Cliente atualizado com sucesso.`);
        } else {
            console.log(`Cliente com ID${cod} não encontrado.`)
        }
    }

    public deletarCliente(cod: number): void {
        const index = this.clientes.findIndex(cliente => cliente.getCod() === cod);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`Cliente com ID ${cod} apagado com sucesso.`);
        } else {
            console.log(`Cliente com ID${cod} não encontrado.`);
        }
    }
}
