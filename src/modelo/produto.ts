export default class Produto {
    public nome!: string;
    public categoria!: string;
    private static proximoCodigo: number = 1;
    private cod: number;
    private preco: number;
    private custo: number;
    private qtdVendida: number;
    private valorTotalVendido: number;
    private margemLucro: number;

    constructor(nome: string, categoria: string, preco: number, custo: number) {
        this.nome = nome;
        this.categoria = categoria;
        this.cod = Produto.proximoCodigo;
        Produto.proximoCodigo++;
        this.preco = preco;
        this.custo = custo;
        this.qtdVendida = 0;
        this.valorTotalVendido = this.qtdVendida * this.preco
        this.margemLucro = ((this.preco - this.custo) / this.preco) * 100;
    }

    public getCod(): number {
        return this.cod;
    }


    public getValorTotalVendido(): number {
        return this.valorTotalVendido
    }

    public getQtdVendida(): number {
        return this.qtdVendida;
    }

    public addQtdVendida(qtdVendida: number): void {
        this.qtdVendida += qtdVendida;
        this.valorTotalVendido = this.qtdVendida * this.preco;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getCusto(): number {
        return this.custo;
    }

    public getMargemLucro(): number {
        return this.margemLucro;
    }

    public setPreco(novoPreco: number): void {
        this.preco = novoPreco;
    }

    public setCusto(novoCusto: number): void {
        this.custo = novoCusto;
    }

    public setNome(novoNome: string): void{
        this.nome = novoNome;
    }

    public setCategoria(novaCategoria: string): void {
        this.categoria = novaCategoria;
    }
}
