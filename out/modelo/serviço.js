"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.cod = Servico.proximoCodigo;
        Servico.proximoCodigo++;
    }
    Object.defineProperty(Servico.prototype, "getPreco", {
        get: function () {
            return this.preco.toFixed(2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getCod", {
        get: function () {
            return this.cod.toString();
        },
        enumerable: false,
        configurable: true
    });
    Servico.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    Servico.proximoCodigo = 1;
    return Servico;
}());
exports.default = Servico;
