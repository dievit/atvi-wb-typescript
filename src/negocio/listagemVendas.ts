import empresa from "../modelo/empresa";
import Empresa from "../modelo/empresa";
import Venda from "../modelo/venda";
import Listagem from "./listagem";

export default class ListagemVendas extends Listagem {
    private vendas: Array<Venda>;

    constructor(vendas: Array<Venda>) {
        super();
        this.vendas = vendas;
    }

    public listar(): void {
        console.log(`\nListagem de Vendas: `);
        console.log(`\n`)
        console.log(`\nInformações da Venda`);
        this.vendas.forEach((venda: Venda) => {
            const cliente = Empresa.getClientePorId(venda.getCodCliente());
            console.log("ID da Venda:", venda.getCodVenda());
            console.log("Data da Venda:", venda.getDataVenda());
            console.log("ID do Cliente:", venda.getCodCliente());

            // Acessar os detalhes do cliente a partir do ID

            if (cliente) {
                console.log("Nome do Cliente:", cliente.nome);
                console.log("Telefone do Cliente:", cliente.getTelefone);
            }

            // Acessar os detalhes do produto
            console.log("Produtos:");
            const produto = Empresa.getProdutosPorId(venda.getCodProduto());
            if (produto) {
                console.log("- Nome:", produto.nome);
                console.log("- Categoria:", produto.categoria);
                // Adicione outras propriedades do produto conforme necessário
          
}
        })
    }

}