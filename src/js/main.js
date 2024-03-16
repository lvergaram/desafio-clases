import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuesto.js";

const impuesto1 = new Impuesto(14000000,9000000)
const clienteLuis = new Cliente("Luis Vergara")

clienteLuis.impuesto = impuesto1
clienteLuis.calcularImpuesto()
