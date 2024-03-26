import Entrada from "../io/entrada";
import Servico from "../modelo/serviço";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de Serviço`);
        let nome = this.entrada.receberTexto(`Informe o nome do serviço: `)
        let preco = this.entrada.receberValor(`Informe o preço de venda: `)

        let servico = new Servico(nome, preco);
        this.servicos.push(servico)
        console.log(`\nCadastro concluído\n`)
    }
}
