export class Impuesto{
    #montoBrutoAnual
    #deducciones

    constructor(montoBrutoAnual=0, deducciones=0){
        this.#montoBrutoAnual = montoBrutoAnual
        this.#deducciones = deducciones
    }

    get montoBrutoAnual(){ return this.#montoBrutoAnual}
    get deducciones(){ return this.#deducciones}

    set montoBrutoAnual(value){ this.#montoBrutoAnual = value}
    set deducciones(value){ this.#deducciones = value}
}