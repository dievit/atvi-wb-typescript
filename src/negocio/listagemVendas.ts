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
        console.log(`\nInformações da Venda`);
        console.log(`\n***************************************************`)
        this.vendas.forEach((venda: Venda) => {
            const cliente = Empresa.getClientePorId(venda.getCodCliente());
            console.log("ID da Venda:", venda.getCodVenda());
            console.log("Data da Venda:", venda.getDataVenda());

            // Acessar os detalhes do cliente a partir do ID

            if (cliente) {
                console.log("Cliente:", cliente.nome);
                console.log("Telefone: ", cliente.getTelefone());
            }

            // Acessar os detalhes do produto
            console.log("\nItens da venda:");
            const itensVendidos = venda.getItensVendidos();
            itensVendidos.forEach(({ produto, qtd}) => {
                console.log("- Nome: ", produto.nome);
                console.log("- Categoria: ", produto.categoria);
                console.log("- Quantidade: ", qtd);
                
                let valorProduto: number = produto.getPreco();
                let valorProdutoFormatado: string = valorProduto.toFixed(2);
                    console.log("- Valor produto: R$"+(valorProdutoFormatado));

                let totalCompra: number = qtd * Number(produto.getPreco());
                let totalCompraFormatada: string = totalCompra.toFixed(2);
                    console.log("- Total: R$"+(totalCompraFormatada) );
                console.log("\n***************************************************");
            });
        
        });
    }
}


