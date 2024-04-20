import Entrada from "../io/entrada";
import cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/crudCliente";
import CadastroProduto from "../negocio/crudProduto";
import CadastroVenda from "../negocio/crudVenda";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemVendas from "../negocio/listagemVendas";



let empresa = new Empresa();
let execucao = true;
        
while (execucao) {
    console.log("╔═══════════════════════════════════════════════════════════════════╗");
    console.log("║  Seja bem-vindo(a) ao cadastro de clientes do Grupo World Beauty` ║");
    console.log("╠═══════════════════════════════════════════════════════════════════╣");    
    console.log("║  Opções:                                                          ║");
    console.log("║       1 - Cadastrar                                               ║");
    console.log("║       2 - Listar                                                  ║");
    console.log("║       0 - Sair                                                    ║");
    console.log("╚═══════════════════════════════════════════════════════════════════╝");
            
    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`\nDigite uma opção → `);
        
    switch (opcao) {
        case 1:
            console.log("╔════════════════════════════╗");
            console.log("║  Cadastrar                 ║");
            console.log("╠════════════════════════════╣");    
            console.log("║  Opções:                   ║");
            console.log("║       1 - Cliente          ║");
            console.log("║       2 - Produto          ║");
            console.log("║       3 - Venda            ║");
            console.log("║       0 - Voltar           ║");
            console.log("╚════════════════════════════╝");
        
            let cadastrarOpcao = entrada.receberNumero(`\nDigite uma opção → `);

                switch (cadastrarOpcao) {
                    case 1:
                        let cadastroCliente = new CadastroCliente(Empresa.getClientes());
                        cadastroCliente.cadastrar();
                        break;
                    case 2:
                        let cadastrarProduto = new CadastroProduto(empresa.getProdutos());
                        cadastrarProduto.cadastrar();
                        break;
                    case 3:
                        let cadastrarServico = new CadastroVenda(empresa.getVendas());
                        cadastrarServico.cadastrar();
                        break;
                    default:
                        console.log(`\nOpção inválida!`);
            }
            break;
                
        case 2:
            console.log("╔════════════════════════════╗");
            console.log("║  Listar                    ║");
            console.log("╠════════════════════════════╣");    
            console.log("║  Opções:                   ║");
            console.log("║       1 - Cliente          ║");
            console.log("║       2 - Produto          ║");
            console.log("║       3 - Vendas           ║");
            console.log("║       0 - Voltar           ║");
            console.log("╚════════════════════════════╝");
        
            let listarOpcao = entrada.receberNumero(`\nDigite uma opção → `);
            switch (listarOpcao) {
                case 1:                            
                    let listagemClientes = new ListagemClientes(Empresa.getClientes());
                    listagemClientes.listar();
                     break;                
                case 2:
                    console.log("╔═════════════════════════════╗");
                    console.log("║  Ordenar                    ║");
                    console.log("╠═════════════════════════════╣");    
                    console.log("║  Opções:                    ║");
                    console.log("║       1 - Listagem Geral    ║");
                    console.log("║       2 - Mais vendido qtd  ║");
                    console.log("║       3 - Mais vendido (R$) ║");
                    console.log("║       4 - Gasto do Cliente  ║");
                    console.log("║       0 - Voltar            ║");
                    console.log("╚═════════════════════════════╝");

                    let ordenar = entrada.receberNumero(`\nDigite uma opção → `)
                    switch (ordenar) {
                        case 1:
                            let listagemProdutos = new ListagemProdutos(empresa.getProdutos());
                            listagemProdutos.listar();
                            break;                                    
                        case 2:
                            let listarPorQuantidade = new ListagemProdutos(empresa.getProdutos());
                            let produtosOrdenadosPorQuantidade = listarPorQuantidade.listarPorQtdVendida();
                            produtosOrdenadosPorQuantidade.forEach(produto => {
                                console.log(`\n${produto.nome} - Quantidade vendida: ${produto.getQtdVendida()}`);
                            });
                            break;
                        case 3:
                            let listarPorValor = new ListagemProdutos(empresa.getProdutos());
                            let produtosOrdenadosPorValorVendido = listarPorValor.listarPorValorTotalVendido();
                            produtosOrdenadosPorValorVendido.forEach(produto => {
                                console.log(`\n${produto.nome} - Total em Vendas: R$${produto.getValorTotalVendido()}`);
                            });
                            break;
                        case 4:
                            let listarClienteValor = new ListagemClientes(Empresa.getClientes());
                            let clientesOrdenadosValor = listarClienteValor.listarClientePorValor();
                            clientesOrdenadosValor.forEach(cliente => {
                                console.log(`\n${cliente.nome} - total em compras: R$${cliente.getValorGasto()}`)
                            })
                            break;
                        default:
                            console.log(`\nOpção inválida!`);
                    }
                    break;    
                case 3: 
                    let listagemVendas = new ListagemVendas(empresa.getVendas());
                    listagemVendas.listar();
                    break;
                default:
                    console.log(`\nOpção inválida!`);
            }
            break;
                
        case 0:
            execucao = false;
            console.log(`\n««Até a próxima!»»`);
            break;
        
        default:
            console.log(`\nOperação inválida, tente novamente!`);
    }
}
