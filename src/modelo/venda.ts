import Cliente from "./cliente";
import Produto from "./produto";

export default class Venda {
    private produto: Produto;
    private cliente: Cliente;
    private dataVenda: Date = new Date();
    private static proximoCodigo: number = 1;
    private codVenda: number;
    private codProduto: number;
    private codCliente: number;
    private qtd: number;

    constructor(produto: Produto, cliente: Cliente, dataVenda: Date, codProduto: number, qtd: number, codCliente: number,) {
        this.produto = produto;
        this.cliente = cliente;
        this.codProduto = codProduto;
        this.qtd = qtd;
        this.codCliente = codCliente;
        this.codVenda = Venda.proximoCodigo;
        Venda.proximoCodigo++;
        this.dataVenda = dataVenda || new Date();

        
    }

    public getProduto(): Produto {
        return this.produto
    }

    public getCliente(): Cliente {
        return this.cliente
    }
    
    public getDataVenda(): Date {
        return this.dataVenda
    }

    public getCodVenda(): number {
        return this.codVenda
    }

    public getCodCliente(): number {
        return this.codCliente
    }

    public getCodProduto(): number {
        return this.codProduto
    }

    public getQtd(): number {
        return this.qtd
    }
    
}