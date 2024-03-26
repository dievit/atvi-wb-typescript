"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_Sync_1 = __importDefault(require("prompt-Sync"));
var Entrada = /** @class */ (function () {
    function Entrada() {
    }
    Entrada.prototype.receberNumero = function (mensagem) {
        var prompt = (0, prompt_Sync_1.default)();
        var valor = prompt(mensagem);
        var numero = new Number(valor);
        return numero.valueOf();
    };
    Entrada.prototype.receberTexto = function (mensagem) {
        var prompt = (0, prompt_Sync_1.default)();
        var texto = prompt(mensagem);
        return texto;
    };
    Entrada.prototype.receberValor = function (mensagem) {
        var prompt = (0, prompt_Sync_1.default)();
        var texto = prompt(mensagem);
        var valor = parseFloat(texto);
        return valor;
    };
    return Entrada;
}());
exports.default = Entrada;
