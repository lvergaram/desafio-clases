export class cliente{
    #nombre
    #impuesto

    constructor(nombre){
        this.#nombre=nombre
        this.#impuesto={}
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(value){
        this.#nombre= value
    }
}