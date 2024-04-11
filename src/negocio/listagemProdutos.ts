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
            console.log(`ID: ` + produto.getCod)
            console.log(`Nome: ` + produto.nome)
            console.log(`Categoria: ` + produto.categoria)
            console.log(`Data de validade: ` + (produto.getDataValidade ? produto.getDataValidade : "sem validade"))
            console.log(`Preço de custo: R$` + produto.getCusto)
            console.log(`Preço de venda: R$` + produto.getPreco)
            console.log(`Margem de lucro: ` + produto.getMargemLucro,`%`)
            console.log(`********************************`)
        })
        console.log(`\n`)
    }
}