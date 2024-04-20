export default class Produto {
    public nome!: string;
    public categoria!: string;
    private static proximoCodigo: number = 1;
    private cod: number;
    private dataValidade?: Date;
    private preco: number;
    private custo: number;
    private qtdVendida: number;
    private valorTotalVendido: number;
    private margemLucro: number;

    constructor(nome: string, categoria: string, dataValidade: Date, preco: number, custo: number) {
        this.nome = nome;
        this.categoria = categoria;
        this.cod = Produto.proximoCodigo;
        Produto.proximoCodigo++;
        this.dataValidade = dataValidade;
        this.preco = preco;
        this.custo = custo;
        this.qtdVendida = 0;
        this.valorTotalVendido = this.qtdVendida * this.preco
        this.margemLucro = ((this.preco - this.custo) / this.preco) * 100;
    }

    public getCod(): string {
        return this.cod.toString();
    }

    public getDataValidade(): string {
        if (this.dataValidade !== undefined) {
            const dia = this.dataValidade.getDate();
            const mes = this.dataValidade.getMonth() + 1; // Mês é baseado em zero
            const ano = this.dataValidade.getFullYear();

            const diaString = dia < 10 ? '0' + dia : dia.toString();
            const mesString = mes < 10 ? '0' + mes : mes.toString();

            return `${diaString}/${mesString}/${ano}`;
        } else {
            return "sem validade";
        }
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

    public getPreco(): string {
        return this.preco.toFixed(2);
    }

    public getCusto(): string {
        return this.custo.toFixed(2);
    }

    public getMargemLucro(): string {
        return this.margemLucro.toFixed(2) + "%";
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    public setCusto(custo: number): void {
        this.custo = custo;
    }
}
