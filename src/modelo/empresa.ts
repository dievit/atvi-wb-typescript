import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./serviço"


export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor() {
        this.clientes = []
        this.preCadastrarClientes();
        this.produtos = []
        this.preCadastrarProdutos();
        this.servicos = []
    }
    private preCadastrarClientes(): void {
        const dataCadastro = new Date();
        const listaDeClientes = [
            { nome: "João da Silva", cpf: 12354387654, telefone: 11789653214},
            { nome: "Maria Oliveira", cpf: 98765432109, telefone: 11987654321 },
            { nome: "Pedro Santos", cpf: 87654321098, telefone: 11876543210 },
            { nome: "Ana Souza", cpf: 76543210987, telefone: 11765432109 },
            { nome: "Lucas Pereira", cpf: 65432109876, telefone: 11654321098 },
            { nome: "Carla Lima", cpf: 54321098765, telefone: 11543210987 },
            { nome: "Marcos Costa", cpf: 43210987654, telefone: 11432109876 },
            { nome: "Juliana Almeida", cpf: 32109876543, telefone: 11321098765 },
            { nome: "Rafael Fernandes", cpf: 21098765432, telefone: 11210987654 },
            { nome: "Fernanda Gomes", cpf: 10987654321, telefone: 11109876543 },
            { nome: "Thiago Silva", cpf: 99887766554, telefone: 11098765432 },
            { nome: "Roberta Santos", cpf: 88776655444, telefone: 11988776655 },
            { nome: "Diego Oliveira", cpf: 77665544333, telefone: 11877665544 },
            { nome: "Camila Rodrigues", cpf: 66554433222, telefone: 11766554433 },
            { nome: "José Pereira", cpf: 55443322111, telefone: 11655443322 },
            { nome: "Sandra Alves", cpf: 44332211000, telefone: 11544332211 },
            { nome: "Paulo Lima", cpf: 33221100099, telefone: 11433221100 },
            { nome: "Mariana Oliveira", cpf: 22110009988, telefone: 11322110099 },
            { nome: "Carlos Silva", cpf: 11000998877, telefone: 11211000988 },
            { nome: "Aline Souza", cpf: 99988877766, telefone: 11199988877 },
            { nome: "Maria Oliveira", cpf: 98765432109, telefone: 11987654321 },
            { nome: "Pedro Santos", cpf: 87654321098, telefone: 11876543210 },
            { nome: "Ana Souza", cpf: 76543210987, telefone: 11765432109 },
            { nome: "Lucas Pereira", cpf: 65432109876, telefone: 11654321098 },
            { nome: "Carla Lima", cpf: 54321098765, telefone: 11543210987 },
            { nome: "Marcos Costa", cpf: 43210987654, telefone: 11432109876 },
            { nome: "Juliana Almeida", cpf: 32109876543, telefone: 11321098765 },
            { nome: "Rafael Fernandes", cpf: 21098765432, telefone: 11210987654 },
            { nome: "Fernanda Gomes", cpf: 10987654321, telefone: 11109876543 },
            { nome: "Thiago Silva", cpf: 99887766554, telefone: 11098765432 }
        ]

        listaDeClientes.forEach(cliente => {
            this.clientes.push(new Cliente(dataCadastro, cliente.nome, cliente.cpf, cliente.telefone, ""));
        });
    }

    private preCadastrarProdutos(): void {
        const listaDeProdutos = [
                { nome: "Gel para cabelo n5", categoria: "Cosméticos", dataValidade: new Date(2025, 4, 25), preco: 10.99, custo: 1.85 },
                { nome: "Shampoo Anticaspa", categoria: "Cabelo", dataValidade: new Date(2024, 8, 30), preco: 12.99, custo: 8.99 },
                { nome: "Condicionador Hidratante", categoria: "Cabelo", dataValidade: new Date(2024, 11, 15), preco: 9.99, custo: 6.99 },
                { nome: "Gel Fixador", categoria: "Cabelo", dataValidade: new Date(2024, 9, 20), preco: 7.49, custo: 4.99 },
                { nome: "Creme para Barbear", categoria: "Barba", dataValidade: new Date(2024, 10, 25), preco: 15.99, custo: 12.49 },
                { nome: "Óleo para Barba", categoria: "Barba", dataValidade: new Date(2024, 7, 28), preco: 11.49, custo: 8.99 },
                { nome: "Pente de Madeira", categoria: "Acessório", dataValidade: new Date(2025, 0, 10), preco: 5.99, custo: 3.99 },
                { nome: "Cera Modeladora", categoria: "Cabelo", dataValidade: new Date(2024, 6, 15), preco: 8.99, custo: 6.49 },
                { nome: "Tinta para Cabelo", categoria: "Cabelo", dataValidade: new Date(2024, 5, 20), preco: 14.99, custo: 10.49 },
                { nome: "Loção Pós-barba", categoria: "Barba", dataValidade: new Date(2024, 9, 5), preco: 9.49, custo: 6.99 },
                { nome: "Secador de Cabelo", categoria: "Acessório", dataValidade: new Date(2025, 2, 12), preco: 49.99, custo: 39.99 },
                { nome: "Escova de Cabelo", categoria: "Acessório", dataValidade: new Date(2025, 4, 18), preco: 6.99, custo: 4.49 },
                { nome: "Gel Esfoliante Facial", categoria: "Rosto", dataValidade: new Date(2024, 11, 30), preco: 11.99, custo: 8.49 },
                { nome: "Máscara Facial", categoria: "Rosto", dataValidade: new Date(2024, 10, 8), preco: 7.99, custo: 5.49 },
                { nome: "Creme Redutor de Medidas", categoria: "Corpo", dataValidade: new Date(2024, 9, 25), preco: 19.99, custo: 15.99 },
                { nome: "Esfoliante Corporal", categoria: "Corpo", dataValidade: new Date(2024, 8, 14), preco: 8.49, custo: 5.99 },
                { nome: "Spray Fixador de Maquiagem", categoria: "Maquiagem", dataValidade: new Date(2024, 7, 22), preco: 12.49, custo: 9.99 },
                { nome: "Delineador de Olhos", categoria: "Maquiagem", dataValidade: new Date(2024, 5, 28), preco: 9.99, custo: 6.99 },
                { nome: "Removedor de Esmalte", categoria: "Unhas", dataValidade: new Date(2024, 6, 10), preco: 5.49, custo: 3.99 },
                { nome: "Creme Hidratante para Mãos", categoria: "Cuidados Pessoais", dataValidade: new Date(2024, 9, 15), preco: 6.99, custo: 4.99 }
                ];
                
                listaDeProdutos.forEach(produto => {
                    this.produtos.push(new Produto(produto.nome, produto.categoria, produto.dataValidade, produto.preco, produto.custo));
                });    
            }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }

}

