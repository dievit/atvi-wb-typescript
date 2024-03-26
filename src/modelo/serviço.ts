export default class Servico {
    public nome!: string
    private preco!: number;
    private static proximoCodigo: number = 1;
    private cod: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
        this.cod = Servico.proximoCodigo;
        Servico.proximoCodigo++;
    }
    public get getPreco(): string {
        return this.preco.toFixed(2);
    }

    public get getCod(): string {
        return this.cod.toString();
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }
}