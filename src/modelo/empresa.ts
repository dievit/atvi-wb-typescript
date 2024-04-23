import Cliente from "./cliente"
import Produto from "./produto"
import Venda from "./venda"

export default class Empresa {
    private static clientes: Cliente[];
    private static produtos: Produto[];
    private static vendas: Venda[];
    constructor() {
        Empresa.clientes = [];
        Empresa.produtos = [];
        Empresa.vendas = [];
        this.preCadastrarClientes();
        this.preCadastrarProdutos();
        this.preCadastrarVendas();
    }

     private preCadastrarClientes(): void {
        const dataCadastro = new Date();
        const listaDeClientes = [
            { nome: "João da Silva", cpf: 12354387654, telefone: 11789653214, genero: "M"},
            { nome: "Maria Oliveira", cpf: 98765432109, telefone: 11987654321, genero: "F" },
            { nome: "Pedro Santos", cpf: 87654321098, telefone: 11876543210, genero: "M" },
            { nome: "Ana Souza", cpf: 76543210987, telefone: 11765432109, genero: "F" },
            { nome: "Lucas Pereira", cpf: 65432109876, telefone: 11654321098, genero: "M" },
            { nome: "Carla Lima", cpf: 54321098765, telefone: 11543210987, genero: "F" },
            { nome: "Marcos Costa", cpf: 43210987654, telefone: 11432109876, genero: "M" },
            { nome: "Juliana Almeida", cpf: 32109876543, telefone: 11321098765, genero: "F" },
            { nome: "Rafael Fernandes", cpf: 21098765432, telefone: 11210987654, genero: "M" },
            { nome: "Fernanda Gomes", cpf: 10987654321, telefone: 11109876543, genero: "F" },
            { nome: "Thiago Silva", cpf: 99887766554, telefone: 11098765432, genero: "M" },
            { nome: "Roberta Santos", cpf: 88776655444, telefone: 11988776655, genero: "F" },
            { nome: "Diego Oliveira", cpf: 77665544333, telefone: 11877665544, genero: "M" },
            { nome: "Camila Rodrigues", cpf: 66554433222, telefone: 11766554433, genero: "F" },
            { nome: "José Pereira", cpf: 55443322111, telefone: 11655443322, genero: "M" },
            { nome: "Sandra Alves", cpf: 44332211000, telefone: 11544332211, genero: "F" },
            { nome: "Paulo Lima", cpf: 33221100099, telefone: 11433221100, genero: "M" },
            { nome: "Mariana Oliveira", cpf: 22110009988, telefone: 11322110099, genero: "F" },
            { nome: "Carlos Silva", cpf: 11000998877, telefone: 11211000988, genero: "M" },
            { nome: "Aline Souza", cpf: 99988877766, telefone: 11199988877, genero: "F" },
            { nome: "Maria Oliveira", cpf: 98765432109, telefone: 11987654321, genero: "F" },
            { nome: "Pedro Santos", cpf: 87654321098, telefone: 11876543210, genero: "M" },
            { nome: "Ana Souza", cpf: 76543210987, telefone: 11765432109, genero: "F" },
            { nome: "Lucas Pereira", cpf: 65432109876, telefone: 11654321098, genero: "M" },
            { nome: "Carla Lima", cpf: 54321098765, telefone: 11543210987, genero: "F" },
            { nome: "Marcos Costa", cpf: 43210987654, telefone: 11432109876, genero: "M" },
            { nome: "Juliana Almeida", cpf: 32109876543, telefone: 11321098765, genero: "F" },
            { nome: "Rafael Fernandes", cpf: 21098765432, telefone: 11210987654, genero: "M" },
            { nome: "Fernanda Gomes", cpf: 10987654321, telefone: 11109876543, genero: "F" },
            { nome: "Thiago Silva", cpf: 99887766554, telefone: 11098765432, genero: "M" }
            ];

            listaDeClientes.forEach(cliente =>{
                Empresa.clientes.push(new Cliente(dataCadastro, cliente.nome, cliente.cpf, cliente.telefone, cliente.genero));
            });
        }
         
    private preCadastrarProdutos(): void {
        const listaDeProdutos = [
                { nome: "Gel para cabelo n5", categoria: "Cosméticos", preco: 10.99, custo: 1.85 },
                { nome: "Shampoo Anticaspa", categoria: "Cabelo", preco: 12.99, custo: 8.99 },
                { nome: "Condicionador Hidratante", categoria: "Cabelo", preco: 9.99, custo: 6.99 },
                { nome: "Gel Fixador", categoria: "Cabelo", preco: 7.49, custo: 4.99 },
                { nome: "Creme para Barbear  ", categoria: "Barba", preco: 15.99, custo: 12.49 },
                { nome: "Óleo para Barba", categoria: "Barba", preco: 11.49, custo: 8.99 },
                { nome: "Pente de Madeira", categoria: "Acessório", preco: 5.99, custo: 3.99 },
                { nome: "Cera Modeladora", categoria: "Cabelo", preco: 8.99, custo: 6.49 },
                { nome: "Tinta para Cabelo", categoria: "Cabelo", preco: 14.99, custo: 10.49 },
                { nome: "Loção Pós-barba", categoria: "Barba", preco: 9.49, custo: 6.99 },
                { nome: "Secador de Cabelo", categoria: "Acessório", preco: 49.99, custo: 39.99 },
                { nome: "Escova de Cabelo", categoria: "Acessório", preco: 6.99, custo: 4.49 },
                { nome: "Gel Esfoliante Facial", categoria: "Rosto", preco: 11.99, custo: 8.49 },
                { nome: "Máscara Facial", categoria: "Rosto", preco: 7.99, custo: 5.49 },
                { nome: "Creme Redutor de Medidas", categoria: "Corpo", preco: 19.99, custo: 15.99 },
                { nome: "Esfoliante Corporal", categoria: "Corpo", preco: 8.49, custo: 5.99 },
                { nome: "Spray Fixador de Maquiagem", categoria: "Maquiagem", preco: 12.49, custo: 9.99 },
                { nome: "Delineador de Olhos", categoria: "Maquiagem", preco: 9.99, custo: 6.99 },
                { nome: "Removedor de Esmalte", categoria: "Unhas", preco: 5.49, custo: 3.99 },
                { nome: "Creme Hidratante para Mãos", categoria: "Cuidados Pessoais", preco: 6.99, custo: 4.99 }
                ];
                
                listaDeProdutos.forEach(produto => {
                    Empresa.produtos.push(new Produto(produto.nome, produto.categoria, produto.preco, produto.custo));
                });
                
                
            }
    
     private preCadastrarVendas(): void {
        const listaDeVendas = [
            { codProduto: 10, qtd: 3, codCliente: 8 },
            { codProduto: 2, qtd: 1, codCliente: 8 },
            { codProduto: 15, qtd: 2, codCliente: 2 },
            { codProduto: 6, qtd: 2, codCliente: 5 },
            { codProduto: 14, qtd: 1, codCliente: 5 },
            { codProduto: 2, qtd: 1, codCliente: 8 },
            { codProduto: 5, qtd: 6, codCliente: 7 }
        ];
        
        listaDeVendas.forEach(venda => {
            const produto = Empresa.getProdutosPorId(venda.codProduto);
            const cliente = Empresa.getClientePorId(venda.codCliente);

            if (produto && cliente) {
                const dataVenda = new Date();
                Empresa.vendas.push(new Venda(([{produto, qtd: venda.qtd}]), dataVenda, venda.codCliente))
            } else {
                console.error('Produto ou cliente não encontrado: ${JSON.stringify(venda)}')
            }
        })
    }

    public static getClientes(): Cliente[] {
        return Empresa.clientes;
    }
    public getVendas(): Array<Venda> {
        return Empresa.vendas;
    }
    
    public getProdutos(): Array<Produto>{
        return Empresa.produtos;
    }

    public static getProdutosPorId(id: number): Produto | null {
        for (const produto of Empresa.produtos) {
            if (produto.getCod() === id) {
                return produto;
            }
        }
        return null;
    }

    public static getClientePorId(id: number): Cliente | null {
    for (const cliente of this.clientes) {
        if (Number(cliente.getCod()) === id) {
            return cliente;
        }
    }
    return null;
    }

    public static filtrarClientesPorGenero(genero) {
        return this.clientes.filter(cliente => cliente.getGenero() === genero);
    }

    public static listarClienteQtd(): Cliente[] {
        return this.clientes.slice().sort((a, b) => b.getQtdComprada() - a.getQtdComprada()).slice(0, 10);
    }

    public static listarClientesDezMenores(): Cliente[] {
        return this.clientes.slice().sort((a, b) => a.getQtdComprada() - b.getQtdComprada()).slice(0,10);
    }

    public static listarClientePorValor(): Cliente[] {
        return this.clientes.slice().sort((a, b) => b.getValorGasto() - a.getValorGasto()).slice(0, 5);
    }
    
}
