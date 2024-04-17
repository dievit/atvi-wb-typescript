import Produto from "./produto"
import Venda from "./venda";


export default class Cliente {
    public nome: string
    public nomeSocial?: string
    private cpf: number
    private cod = Cliente.proximoCodigo;
    private static proximoCodigo: number = 1;
    private dataCadastro: Date = new Date();
    private telefone: number
    private vendas: Venda[] = [];
/*     private produtosConsumidos!: Array<Produto>
    private produtosVendidos!: Array<Venda> */
    
    constructor(dataCadastro: Date, nome: string, cpf: number, telefone: number, nomeSocial?: string) {
            this.nome = nome
            this.cpf = cpf
            this.cod = Cliente.proximoCodigo;
            Cliente.proximoCodigo++;
            this.dataCadastro = dataCadastro || new Date();
            this.telefone = telefone
            this.nomeSocial = nomeSocial

/*             this.produtosConsumidos = []
            this.produtosVendidos = []
 */        
    }

    public adicionarVenda(venda: Venda): void {
        this.vendas.push(venda);
    }
    public get getCod(): string {
        return this.cod.toString();
    }

    public get getCpf(): number {
        return this.cpf
    }           
    public get getTelefone(): number {
        return this.telefone
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

/*     public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
 */
    
}