import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Venda from "../modelo/venda";
import Cadastro from "./cadastro";

export default class CadastroVenda extends Cadastro {
    private vendas: Array<Venda>;
    private entrada: Entrada;

    constructor(vendas: Array<Venda>) {
        super();
        this.vendas = vendas;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de Venda`);
        let codProduto = this.entrada.receberValor(`Informe o código do produto: `);
        let codCliente = this.entrada.receberValor(`Informe o código do cliente: `)
        let produto = Empresa.getProdutosPorId(codProduto);
        let cliente = Empresa.getClientePorId(codCliente);
        if (produto && cliente) {
            let qtd = this.entrada.receberValor(`Informe a quantidade vendida: `);
            let codCliente = this.entrada.receberValor(`Informe o código do cliente: `);
            let dataVenda = new Date();

            let venda = new Venda(produto, cliente, dataVenda, codProduto, qtd, codCliente);
            this.vendas.push(venda);
            console.log(`\nCadastro concluído\n`);
        } else {
            console.error("Produto não encontrado.");
        }    
    }
}