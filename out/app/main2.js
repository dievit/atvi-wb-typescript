"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var crudCliente_1 = __importDefault(require("../negocio/crudCliente"));
var crudProduto_1 = __importDefault(require("../negocio/crudProduto"));
var crudServico_1 = __importDefault(require("../negocio/crudServico"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var listagemProdutos_1 = __importDefault(require("../negocio/listagemProdutos"));
var listagemServicos_1 = __importDefault(require("../negocio/listagemServicos"));
console.log("Seja bem-vindo(a) ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es: ");
    console.log("1 - Cadastrar");
    console.log("2 - Listar");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            console.log("\nCadastrar: ");
            console.log("1 - Cliente");
            console.log("2 - Produto");
            console.log("3 - Servi\u00E7o");
            var cadastrarOpcao = entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
            switch (cadastrarOpcao) {
                case 1:
                    var cadastroCliente = new crudCliente_1.default(empresa.getClientes);
                    cadastroCliente.cadastrar();
                    break;
                case 2:
                    var cadastrarProduto = new crudProduto_1.default(empresa.getProdutos);
                    cadastrarProduto.cadastrar();
                    break;
                case 3:
                    var cadastrarServico = new crudServico_1.default(empresa.getServicos);
                    cadastrarServico.cadastrar();
                    break;
                default:
                    console.log("Op\u00E7\u00E3o inv\u00E1lida!");
            }
            break;
        case 2:
            console.log("\nListar: ");
            console.log("1 - Clientes");
            console.log("2 - Produtos");
            console.log("3 - Servi\u00E7os");
            var listarOpcao = entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
            switch (listarOpcao) {
                case 1:
                    var listagemClientes = new listagemClientes_1.default(empresa.getClientes);
                    listagemClientes.listar();
                    break;
                case 2:
                    var listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos);
                    listagemProdutos.listar();
                    break;
                case 3:
                    var listagemServicos = new listagemServicos_1.default(empresa.getServicos);
                    listagemServicos.listar();
                    break;
                default:
                    console.log("Op\u00E7\u00E3o inv\u00E1lida!");
            }
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 a pr\u00F3xima!");
            break;
        default:
            console.log("Opera\u00E7\u00E3o inv\u00E1lida, tente novamente!");
    }
}
