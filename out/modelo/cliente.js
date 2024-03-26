"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(dataCadastro, nome, cpf, telefone, nomeSocial) {
        this.dataCadastro = new Date();
        this.nome = nome;
        this.cpf = cpf;
        this.cod = Cliente.proximoCodigo;
        Cliente.proximoCodigo++;
        this.dataCadastro = dataCadastro || new Date();
        this.telefone = telefone;
        this.nomeSocial = nomeSocial;
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    Object.defineProperty(Cliente.prototype, "getCod", {
        get: function () {
            return this.cod.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefone", {
        get: function () {
            return this.telefone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRg", {
        get: function () {
            return this.rg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.proximoCodigo = 1;
    return Cliente;
}());
exports.default = Cliente;
