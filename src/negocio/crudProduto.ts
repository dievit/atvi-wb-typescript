import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Produto[]
    private entrada: Entrada
    constructor(produtos: Produto[]) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Produto`);
        let nome = this.entrada.receberTexto(`Informe o nome do produto: `)
        let categoria = this.entrada.receberTexto(`Informe a categoria do produto: `)
        let custo = this.entrada.receberValor(`Informe o preço de custo: `)
        let preco = this.entrada.receberValor(`Informe o preço de venda: `)
        

        let produto = new Produto(nome, categoria, preco, custo);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído\n`)
    }

    public updateProduto(cod: number): void {
        const produtoIndex = this.produtos.findIndex(produto => produto.getCod() === cod);

        if (produtoIndex !== -1) {
            const produto = this.produtos[produtoIndex];
            console.log(`Produto encontrado: ${produto.nome}`);

            let novoNome = this.entrada.receberTexto(`Informe o novo nome do produto: `);
            let novaCategoria = this.entrada.receberTexto(`Informe a nova categoria do produto: `);
            let novoCusto = this.entrada.receberValor(`Informe o novo preço de custo: `);
            let novoPreco = this.entrada.receberValor(`Informe o novo preço de venda: `);
            
            if(novoNome) {
                produto.setNome(novoNome);
            }
            if(novaCategoria) {
                produto.setCategoria(novaCategoria);
            }
            if(novoCusto) {
                produto.setCusto(novoCusto);
            }
            if(novoPreco) {
                produto.setPreco(novoPreco);
            }

            console.log(`Produto atualizado com sucesso.`);
        } else {
            console.log(`Produto com ID ${cod} não encontrado.`);
        }
    }

    public deletarProduto(cod: number): void {
        const index = this.produtos.findIndex(produto => produto.getCod() === cod);
        if (index !== -1) {
            const produtoDeletado = this.produtos[index];
            const nomeProdutoDeletado = produtoDeletado.nome;
            this.produtos.splice(index, 1);
            console.log(`Produto ${nomeProdutoDeletado} com ID ${cod} apagado com sucesso.`);
        } else {
            console.log(`Produto com ID ${cod} não encontrado.`);
        }
    }
}
