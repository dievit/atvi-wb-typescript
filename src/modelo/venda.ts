import Produto from "./produto";

export default class Venda {
    private dataVenda: Date = new Date();
    private static proximoCodigo: number = 1;
    private codVenda: number;
    private codCliente: number;
    private itensVendidos: {produto: Produto; qtd: number }[];



    constructor(itensVendidos: { produto: Produto; qtd: number }[], dataVenda: Date, codCliente: number) {
        this.itensVendidos = itensVendidos;
        this.codVenda = Venda.proximoCodigo;
        Venda.proximoCodigo++;
        this.dataVenda = dataVenda || new Date();
        this.codCliente = codCliente;
        itensVendidos.forEach((elemento) => {
            elemento.produto.addQtdVendida(elemento.qtd)
        })
    }
   
    public getDataVenda(): Date {
        return this.dataVenda
    }

    public getCodCliente(): number {
        return this.codCliente
    }

    public getCodVenda(): number {
        return this.codVenda
    }

    public getItensVendidos(): { produto: Produto; qtd: number }[] {
        return this.itensVendidos
    }
}