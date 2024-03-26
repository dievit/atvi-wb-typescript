import empresa from "./empresa"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./serviço"




export default class Cliente {
    public nome?: string
    public nomeSocial?: string
    private cpf: number
    private cod = Cliente.proximoCodigo;
    private static proximoCodigo: number = 1;
    private rg?: RG
    private dataCadastro: Date = new Date();
    private telefone: number
    private produtosConsumidos!: Array<Produto>
    private servicosConsumidos!: Array<Servico>
    
    constructor(dataCadastro: Date, nome: string, cpf: number, telefone: number, nomeSocial?: string) {
            this.nome = nome
            this.cpf = cpf
            this.cod = Cliente.proximoCodigo;
            Cliente.proximoCodigo++;
            this.dataCadastro = dataCadastro || new Date()
            this.telefone = telefone
            this.nomeSocial = nomeSocial

            this.produtosConsumidos = []
            this.servicosConsumidos = []
        
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
    public get getRg(): RG | undefined {
       return this.rg 
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

}