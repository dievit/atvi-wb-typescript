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
        var cpf = this.entrada.receberNumero("Informe o n\u00FAmero de CPF: ");
        var telefone = this.entrada.receberNumero("Informe seu n\u00FAmero de telefone com DDD: ");
        var dataCadastro = new Date();
        var cliente = new cliente_1.default(dataCadastro, nome, cpf, telefone, nomeSocial);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
