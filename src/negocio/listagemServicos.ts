import Servico from "../modelo/serviço";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void{
        console.log(`\nListagem de Produtos: `)
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome)
            console.log(`Preço do serviço: R$` + servico.getPreco)
            console.log(`********************************`)
        })
        console.log(`\n`)
    }
}