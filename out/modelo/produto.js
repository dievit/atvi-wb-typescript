"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, categoria, dataValidade, preco, custo) {
        this.nome = nome;
        this.categoria = categoria;
        this.cod = Produto.proximoCodigo;
        Produto.proximoCodigo++;
        this.dataValidade = dataValidade;
        this.preco = preco;
        this.custo = custo;
    }
    Object.defineProperty(Produto.prototype, "getCod", {
        get: function () {
            return this.cod.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getDataValidade", {
        get: function () {
            if (this.dataValidade !== undefined) {
                var dia = this.dataValidade.getDate();
                var mes = this.dataValidade.getMonth() + 1; // Mês é baseado em zero
                var ano = this.dataValidade.getFullYear();
                var diaString = dia < 10 ? '0' + dia : dia.toString();
                var mesString = mes < 10 ? '0' + mes : mes.toString();
                return "".concat(diaString, "/").concat(mesString, "/").concat(ano);
            }
            else {
                return "sem validade";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getPreco", {
        get: function () {
            return this.preco.toFixed(2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getCusto", {
        get: function () {
            return this.custo.toFixed(2);
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    Produto.prototype.setCusto = function (custo) {
        this.custo = custo;
    };
    Produto.proximoCodigo = 1;
    return Produto;
}());
exports.default = Produto;
