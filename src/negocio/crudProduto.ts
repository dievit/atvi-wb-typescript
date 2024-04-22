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
        let dataVal = this.entrada.receberTexto(`Informe a data de validade, se houver, no padrão dd/mm/aaaa: `)
        let custo = this.entrada.receberValor(`Informe o preço de custo: `)
        let preco = this.entrada.receberValor(`Informe o preço de venda: `)
        
        let partesData = dataVal.split('/');
        let ano, mes, dia;

        if(partesData.length === 3) {
        ano = parseInt(partesData[2]);
        mes = parseInt(partesData[1]) - 1;
        dia = parseInt(partesData[0]);
         } else {
        ano = 0;
        mes = 0;
        dia = 0;
        }

        let dataValidade = new Date(ano, mes, dia);
        let produto = new Produto(nome, categoria, dataValidade, preco, custo);
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
            let novaDataVal = this.entrada.receberTexto(`Informe a nova data de validade, se houver, no padrão dd/mm/aaaa: `);
            let novoCusto = this.entrada.receberValor(`Informe o novo preço de custo: `);
            let novoPreco = this.entrada.receberValor(`Informe o novo preço de venda: `);

            let partesData = novaDataVal.split('/');
            let ano, mes, dia;

            if(partesData.length === 3) {
                ano = parseInt(partesData[2]);
                mes = parseInt(partesData[1]) - 1;
                dia = parseInt(partesData[0]);
            } else {
                ano = 0;
                mes = 0;
                dia = 0;
            }

            produto.setNome(novoNome);
            produto.setCategoria(novaCategoria);
            produto.setDataValidade(new Date(ano, mes, dia));
            produto.setCusto(novoCusto);
            produto.setPreco(novoPreco);

            console.log(`Produto atualizado com sucesso.`);
        } else {
            console.log(`Produto com ID ${cod} não encontrado.`);
        }
    }
}
