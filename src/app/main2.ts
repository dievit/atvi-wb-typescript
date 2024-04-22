import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/crudCliente";
import CadastroProduto from "../negocio/crudProduto";
import CadastroVenda from "../negocio/crudVenda";
import Listagem from "../negocio/listagem";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemVendas from "../negocio/listagemVendas";



let empresa = new Empresa();
let execucao = true;
        
while (execucao) {
    const entrada = new Entrada();
    
    console.log("╔═══════════════════════════════════════════════════════════════════╗");
    console.log("║  Seja bem-vindo(a) ao cadastro de clientes do Grupo World Beauty` ║");
    console.log("╠═══════════════════════════════════════════════════════════════════╣");    
    console.log("║  Opções:                                                          ║");
    console.log("║       1 - Cadastrar/Editar                                        ║");
    console.log("║       2 - Listar                                                  ║");
    console.log("║       3 - Terminal de Venda                                       ║");
    console.log("║       4 - Editar um produto (TESTE)                               ║");
    console.log("║                                                                   ║");
    console.log("║       0 - Sair                                                    ║");
    console.log("╚═══════════════════════════════════════════════════════════════════╝");
            
    const opcao = entrada.receberNumero(`\nDigite uma opção → `);
        
    switch (opcao) {
        case 1:
            console.log("╔════════════════════════════════╗");
            console.log("║  Cadastrar/Editar              ║");
            console.log("╠════════════════════════════════╣");    
            console.log("║  Opções:                       ║");
            console.log("║       1 - Cadastrar Cliente    ║");
            console.log("║       2 - Editar Cliente       ║");
            console.log("║       3 - Cadastrar Produto    ║");
            console.log("║       4 - Editar Produto       ║");
            console.log("║                                ║");
            console.log("║       0 - Voltar               ║");
            console.log("╚════════════════════════════════╝");
        
            const cadastrarOpcao = entrada.receberNumero(`\nDigite uma opção → `);

                switch (cadastrarOpcao) {
                    case 1:
                        const cadastroCliente = new CadastroCliente(Empresa.getClientes());
                        cadastroCliente.cadastrar();
                        break;
                    case 2:
                        const atualizarCadastroCliente = new CadastroCliente(Empresa.getClientes());
                        const idClienteParaAtualizar = entrada.receberNumero(`Informe o ID do cliente que deseja atualizar: `);
                        atualizarCadastroCliente.updateCliente(idClienteParaAtualizar);     

                    case 3:
                        const cadastrarProduto = new CadastroProduto(empresa.getProdutos());
                        cadastrarProduto.cadastrar();
                        break;
                    case 4:
                        const atualizarCadastroProduto = new CadastroProduto(empresa.getProdutos());
                        const idProdutoParaAtualizar = entrada.receberNumero(`Informe o ID do produto que deseja atualizar: `);
                        atualizarCadastroProduto.updateProduto(idProdutoParaAtualizar);
                        break;
                    case 0:
                        break;
                    default:
                        console.log(`Opção Inválida!`);
            }
            break;
                
        case 2:
            console.log("╔══════════════════════════════════════════╗");
            console.log("║  Listar                                  ║");
            console.log("╠══════════════════════════════════════════╣");    
            console.log("║  Opções:                                 ║");
            console.log("║       1 - Listagens de Clientes          ║");
            console.log("║       2 - Listagens de Produtos          ║");
            console.log("║       3 - Listagem de Vendas             ║");
            console.log("║                                          ║");
            console.log("║       0 - Voltar                         ║");
            console.log("╚══════════════════════════════════════════╝");
        
            const listarClientes = entrada.receberNumero(`\nDigite uma opção → `);
            switch (listarClientes) {
                case 1:
                    console.log("╔════════════════════════════════════════════╗");
                    console.log("║  Listagens de Clientes                     ║");
                    console.log("╠════════════════════════════════════════════╣");    
                    console.log("║  Opções:                                   ║");
                    console.log("║       1 - Listagem Geral                   ║");
                    console.log("║       2 - Listagem por Gênero Masculino    ║");
                    console.log("║       3 - Listagem por Gênero Feminino     ║");
                    console.log("║       4 - Top #5 que mais compraram em R$  ║");
                    console.log("║       5 - Top #10 que MAIS compraram (qtd) ║");
                    console.log("║       6 - Top #10 que MENOS compraram (qtd)║");
                    console.log("║                                            ║");
                    console.log("║       0 - Voltar                           ║");
                    console.log("╚════════════════════════════════════════════╝");
                    
                    const opcaoCliente = entrada.receberNumero(`\nDigite uma opção → `)

                    switch(opcaoCliente) {
                        case 1:
                            const listagemClientesGeral = new ListagemClientes(Empresa.getClientes());
                            listagemClientesGeral.listar();
                            break;

                        case 2:
                            const clientesMasc = new ListagemClientes(Empresa.filtrarClientesPorGenero('M'));
                            clientesMasc.listar();
                            break;

                        case 3:
                            const clienteFemi = new ListagemClientes(Empresa.filtrarClientesPorGenero('F'));
                            clienteFemi.listar();
                            break;
                        
                        case 4: 
                            const listarTopFive = new ListagemClientes(Empresa.listarClientePorValor());
                            listarTopFive.listar5();
                            break;

                        case 5:
                            const topTenPlus = new ListagemClientes(Empresa.listarClienteQtd());
                            topTenPlus.listarMais10();
                            break;

                        case 6:
                            const topTenMinus = new ListagemClientes(Empresa.listarClientesDezMenores());
                            topTenMinus.listarMenos10();
                            break;

                        case 0:
                            break;
                        default:
                            console.log(`Opção Inválida!`);
                    }
                    break;
                case 2:
                    console.log("╔════════════════════════════════════════════╗");
                    console.log("║  Listagens de Produtos                     ║");
                    console.log("╠════════════════════════════════════════════╣");    
                    console.log("║  Opções:                                   ║");
                    console.log("║       1 - Listagem Geral                   ║");
                    console.log("║       2 - Produtos mais consumidos (qtd)   ║");
                    console.log("║       3 - Listagem por Gênero Masculino    ║");
                    console.log("║       4 - Listagem por Gênero Feminino     ║");
                    console.log("║                                            ║");
                    console.log("║       0 - Voltar                           ║");
                    console.log("╚════════════════════════════════════════════╝");

                    const ordenar = entrada.receberNumero(`\nDigite uma opção → `)
                    switch (ordenar) {
                        case 1:
                            const listagemProdutos = new ListagemProdutos(empresa.getProdutos());
                            listagemProdutos.listar();
                            break;                                    
                        case 2:
                            const listarPorQuantidade = new ListagemProdutos(empresa.getProdutos());
                            const produtosOrdenadosPorQuantidade = listarPorQuantidade.listarPorQtdVendida();
                            produtosOrdenadosPorQuantidade.forEach(produto => {
                                console.log(`\n${produto.nome} - Quantidade vendida: ${produto.getQtdVendida()}`);
                            });
                            break;
                        case 3:
                            const listarPorValor = new ListagemProdutos(empresa.getProdutos());
                            const produtosOrdenadosPorValorVendido = listarPorValor.listarPorValorTotalVendido();
                            produtosOrdenadosPorValorVendido.forEach(produto => {
                                console.log(`\n${produto.nome} - Total em Vendas: R$${produto.getValorTotalVendido()}`);
                            });
                            break;
                        case 0:
                            break;
                        default:
                            console.log(`\nOpção inválida!`);
                    }
                    break;    
                case 3: 
                    const listagemVendas = new ListagemVendas(empresa.getVendas());
                    listagemVendas.listar();
                    break;
                default:
                    console.log(`\nOpção inválida!`);
            }
            break;
        case 3:
            const cadastrarVenda = new CadastroVenda(empresa.getVendas());
            cadastrarVenda.cadastrar();
            break;



    case 0:
        execucao = false;
        console.log(`\n««Até a próxima!»»`);
        break;        
    default:
        console.log(`\nOperação inválida, tente novamente!`);
    }
}
