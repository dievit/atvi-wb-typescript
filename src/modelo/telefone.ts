
export default class Telefone {
    private ddd: number
    private numero: number
    constructor(ddd: number, numero: number) {
        this.ddd = ddd
        this.numero = numero
    }
    public get getDdd(): number {
        return this.ddd
    }
    public get getNumero(): number {
        return this.numero
    }

}