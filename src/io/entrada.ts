import promptSync from "prompt-Sync";

export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let numero = new Number(valor)
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(mensagem)
        return texto
    }
    public receberValor(mensagem: string): number {
        let prompt = promptSync();
        let texto = prompt(mensagem);
        let valor = parseFloat(texto);
        return valor;
    }
}
