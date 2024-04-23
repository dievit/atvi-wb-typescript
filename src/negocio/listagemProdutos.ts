import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void{
        console.log(`\nListagem de Produtos: `)
        this.produtos.forEach((produto: Produto) => {
            console.log(`ID: ` + produto.getCod())
            console.log(`Nome: ` + produto.nome)
            console.log(`Categoria: ` + produto.categoria)
            
            let produtoCusto: number = produto.getCusto();
            let produtoCustoFormatado: string = produtoCusto.toFixed(2);
                console.log(`Preço de custo: R$` + (produtoCustoFormatado))
            
                let produtoPreco: number = produto.getPreco();
            let produtoPrecoFormatado: string = produtoPreco.toFixed(2);    
                console.log(`Preço de venda: R$` + (produtoPrecoFormatado));
            
            let margem: number = produto.getMargemLucro();
            let margemFormatada: string = margem.toFixed(2);
                console.log(`Margem de lucro: ` + (margemFormatada)+"%")
            console.log(`********************************`)
        })
        console.log(`\n`)
    }

    public listarPorQtdVendida(): Array<Produto> {
        return this.produtos.slice(0, 5).sort((a, b) => b.getQtdVendida() - a.getQtdVendida());
    }

    public listarPorValorTotalVendido(): Array<Produto> {
        return this.produtos.slice(0, 5).sort((a, b) => b.getValorTotalVendido() - a.getValorTotalVendido());
    }

    
}