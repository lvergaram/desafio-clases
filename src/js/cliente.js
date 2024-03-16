import { Impuesto } from "./impuesto.js"

export class Cliente{
    #nombre
    #impuesto

    constructor(nombre,impuesto){
        this.#nombre=nombre
        this.#impuesto=impuesto
    }

    get nombre(){return this.#nombre}
    get impuesto(){return this.#impuesto}

    set nombre(value){
        this.#nombre= value
    }
    set impuesto(value){
        this.#impuesto= value
    }

    calcularImpuesto(){
        return this.#impuesto?  (this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones )* 0.21 : "defina el objeto impuesto de este cliente"
    }
}