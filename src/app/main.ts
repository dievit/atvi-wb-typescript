import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/crudCliente";
import ListagemClientes from "../negocio/listagemClientes";
import Entrada from "../io/entrada";
import CadastroProduto from "../negocio/crudProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import Produto from "../modelo/produto";
import ListagemServicos from "../negocio/listagemServicos";
import CadastroServico from "../negocio/crudServico";

console.log(`Seja bem-vindo(a) ao cadastro de clientes do Grupo World Beauty`);
let empresa = new Empresa();
let execucao = true;

while (execucao) {
    console.log(`Opções: `);
    console.log(`1 - Cadastrar o cliente.`);
    console.log(`2 - Listar todos os clientes.`);
    console.log(`3 - Cadastrar produto.`);
    console.log(`4 - Listar todos os produtos.`);
    console.log(`5 - Cadastrar serviço.`);
    console.log(`6 - Listar todos os serviços.`);

    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Escolha uma opção: `);

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes);
            cadastro.cadastrar();
            break;
        
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes);
            listagem.listar();
            break;

        case 3:
            let cadastrarProduto = new CadastroProduto(empresa.getProdutos);
            cadastrarProduto.cadastrar();
            break;

        case 4:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        
        case 5:
            let cadastrarServico = new CadastroServico(empresa.getServicos);
            cadastrarServico.cadastrar();
            break;
                
        case 6:
            let listagemServicos = new ListagemServicos(empresa.getServicos);
            listagemServicos.listar();
            break;
            
        case 0:
            execucao = false;
            console.log(`Até a próxima!`);
            break;
        default:
            console.log(`Operação inválida, tente novamente!`);
    }
}
