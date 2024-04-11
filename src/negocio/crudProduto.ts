import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
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
}
