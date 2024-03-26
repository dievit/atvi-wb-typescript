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
var produto_1 = __importDefault(require("../modelo/produto"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroProduto.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro de Cliente");
        var nome = this.entrada.receberTexto("Informe o nome do produto: ");
        var categoria = this.entrada.receberTexto("Informe a categoria do produto: ");
        var dataVal = this.entrada.receberTexto("Informe a data de validade, se houver, no padr\u00E3o dd/mm/aaaa: ");
        var custo = this.entrada.receberValor("Informe o pre\u00E7o de custo: ");
        var preco = this.entrada.receberValor("Informe o pre\u00E7o de venda: ");
        var partesData = dataVal.split('/');
        var ano, mes, dia;
        if (partesData.length === 3) {
            ano = parseInt(partesData[2]);
            mes = parseInt(partesData[1]) - 1;
            dia = parseInt(partesData[0]);
        }
        else {
            ano = 0;
            mes = 0;
            dia = 0;
        }
        var dataValidade = new Date(ano, mes, dia);
        var produto = new produto_1.default(nome, categoria, dataValidade, preco, custo);
        this.produtos.push(produto);
        console.log("\nCadastro conclu\u00EDdo\n");
    };
    return CadastroProduto;
}(cadastro_1.default));
exports.default = CadastroProduto;
