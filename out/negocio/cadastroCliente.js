"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var rg_1 = __importDefault(require("../modelo/rg"));
var telefone_1 = __importDefault(require("../modelo/telefone"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro de Cliente");
        var nome = this.entrada.receberTexto("Informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Informe o nome social do cliente: ");
        var valor = this.entrada.receberTexto("Informe o n\u00FAmero de CPF: ");
        var data = this.entrada.receberTexto("Informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/aaaa: ");
        var ddd = this.entrada.receberNumero("Informe o ddd: ");
        var numero = this.entrada.receberNumero("Informe seu n\u00FAmero de telefone: ");
        var partesData = data.split('/');
        var ano, mes, dia;
        if (partesData.length === 3) {
            ano = parseInt(partesData[2]);
            mes = parseInt(partesData[1]);
            dia = parseInt(partesData[0]);
        }
        else {
            ano = 0;
            mes = 0;
            dia = 0;
        }
        var dataEmissao = new Date(ano, mes, dia);
        var cpf = new cpf_1.default(valor, dataEmissao);
        var dataCadastro = new Date();
        var rg = new rg_1.default(valor, dataEmissao);
        var telefone = new telefone_1.default(ddd, numero);
        var cliente = new cliente_1.default(dataCadastro, nome, cpf, telefone, rg, nomeSocial);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
