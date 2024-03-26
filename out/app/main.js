"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var empresa_1 = __importDefault(require("../modelo/empresa"));
var crudCliente_1 = __importDefault(require("../negocio/crudCliente"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var entrada_1 = __importDefault(require("../io/entrada"));
var crudProduto_1 = __importDefault(require("../negocio/crudProduto"));
var listagemProdutos_1 = __importDefault(require("../negocio/listagemProdutos"));
var listagemServicos_1 = __importDefault(require("../negocio/listagemServicos"));
var crudServico_1 = __importDefault(require("../negocio/crudServico"));
console.log("Seja bem-vindo(a) ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es: ");
    console.log("1 - Cadastrar o cliente.");
    console.log("2 - Listar todos os clientes.");
    console.log("3 - Cadastrar produto.");
    console.log("4 - Listar todos os produtos.");
    console.log("5 - Cadastrar servi\u00E7o.");
    console.log("6 - Listar todos os servi\u00E7os.");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new crudCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var cadastrarProduto = new crudProduto_1.default(empresa.getProdutos);
            cadastrarProduto.cadastrar();
            break;
        case 4:
            var listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 5:
            var cadastrarServico = new crudServico_1.default(empresa.getServicos);
            cadastrarServico.cadastrar();
            break;
        case 6:
            var listagemServicos = new listagemServicos_1.default(empresa.getServicos);
            listagemServicos.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 a pr\u00F3xima!");
            break;
        default:
            console.log("Opera\u00E7\u00E3o inv\u00E1lida, tente novamente!");
    }
}
