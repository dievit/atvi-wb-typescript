import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/crudCliente";
import CadastroProduto from "../negocio/crudProduto";
import CadastroVenda from "../negocio/crudVenda";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemVendas from "../negocio/listagemVendas";


        console.log(`Seja bem-vindo(a) ao cadastro de clientes do Grupo World Beauty`);
        let empresa = new Empresa();
        let execucao = true;
        
        while (execucao) {
            console.log(`Opções: `);
            console.log(`1 - Cadastrar`);
            console.log(`2 - Listar`);
            console.log(`0 - Sair`);
        
            let entrada = new Entrada();
            let opcao = entrada.receberNumero(`Escolha uma opção: `);
        
            switch (opcao) {
                case 1:
                    console.log(`\nCadastrar: `);
                    console.log(`1 - Cliente`);
                    console.log(`2 - Produto`);
                    console.log(`3 - Venda`);
        
                    let cadastrarOpcao = entrada.receberNumero(`Escolha uma opção: `);
                    switch (cadastrarOpcao) {
                        case 1:
                            let cadastroCliente = new CadastroCliente(empresa.getClientes);
                            cadastroCliente.cadastrar();
                            break;
                        case 2:
                            let cadastrarProduto = new CadastroProduto(empresa.getProdutos);
                            cadastrarProduto.cadastrar();
                            break;
                        case 3:
                            let cadastrarServico = new CadastroVenda(empresa.getVendas);
                            cadastrarServico.cadastrar();
                            break;
                        default:
                            console.log(`Opção inválida!`);
                    }
                    break;
                
                case 2:
                    console.log(`\nListar: `);
                    console.log(`1 - Clientes`);
                    console.log(`2 - Produtos`);
                    console.log(`3 - Vendas`);
        
                    let listarOpcao = entrada.receberNumero(`Escolha uma opção: `);
                    switch (listarOpcao) {
                        case 1:
                            
                            let listagemClientes = new ListagemClientes(empresa.getClientes);
                            listagemClientes.listar();
                            break;
                
                        case 2:
                            let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
                            listagemProdutos.listar();
                            break;

                        case 3:
                            let listagemVendas = new ListagemVendas(empresa.getVendas);
                            listagemVendas.listar();
                            break;
                        default:
                            console.log(`Opção inválida!`);
                    }
                    break;
        
                case 0:
                    execucao = false;
                    console.log(`Até a próxima!`);
                    break;
        
                default:
                    console.log(`Operação inválida, tente novamente!`);
            }
        }
