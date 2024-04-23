import Venda from "./venda";


export default class Cliente {
    public nome: string
    private genero: string
    private cpf: number
    private cod = Cliente.proximoCodigo;
    private static proximoCodigo: number = 1;
    private dataCadastro: Date = new Date();
    private telefone: number;
    private qtdComprada: number;
    private valorGasto: number;
    private vendas: Venda[] = [];
    
    constructor(dataCadastro: Date, nome: string, cpf: number, telefone: number, genero: string) {
            this.nome = nome;
            this.cpf = cpf;
            this.cod = Cliente.proximoCodigo;
            Cliente.proximoCodigo++;
            this.dataCadastro = dataCadastro || new Date();
            this.telefone = telefone;
            this.genero = genero;
            this.qtdComprada = 0;
            this.valorGasto = 0;

    }
    public getGenero(): string {
        return this.genero;
    }

    public getQtdComprada(): number {
        return this.qtdComprada;
    }

    public addQtdComprada(valor: number): void {
        this.qtdComprada += valor;
    }

    public addValorGasto(valor: number): void {
        this.valorGasto += valor;
    }
    public getValorGasto(): number {
        return this.valorGasto;
    }

    public adicionarVenda(venda: Venda): void {
        this.vendas.push(venda);
    }
    public getCod(): number {
        return this.cod;
    }
    public getNome():string {
        return this.nome;
    }

    public getCpf(): number {
        return this.cpf
    }           
    public getTelefone(): number {
        return this.telefone
    }
    public getDataCadastro(): Date {
        return this.dataCadastro
    }
    
    public setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    public setCpf(novoCpf: number): void {
        this.cpf = novoCpf;
    }

    public setGenero(novoGenero: string): void {
        this.genero = novoGenero;
    }

    public setTelefone(novoTelefone: number): void {
        this.telefone = novoTelefone;
    }

    
}