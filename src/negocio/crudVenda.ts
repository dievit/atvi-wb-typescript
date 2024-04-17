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
        let codProduto = this.entrada.receberValor('Informe o código do produto: ');
        let codCliente = this.entrada.receberValor('Informe o código do cliente: ');
        let qtdVendida = this.entrada.receberValor('Informe a quantidade vendida: ');

        let produto = Empresa.getProdutosPorId(codProduto);
        let cliente = Empresa.getClientePorId(codCliente);

        if (produto && cliente) {
            let produtosVendidos = [{ produto, qtd: qtdVendida}];
            let venda = new Venda(produtosVendidos, new Date(), codCliente);

            this.vendas.push(venda);

            console.log(`\nCadastro Concluído\n`);
        } else {
            console.error("Produto ou Cliente não encontrado")
        }
    }
}
