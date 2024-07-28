import Cl_vAerolinea from "./Cl_vAerolinea.js";
import Cl_vVuelo from "./Cl_vVuelo.js";
import Cl_mAerolinea from "./Cl_mAerolinea.js";
import Cl_mVuelo from "./Cl_mVuelo.js";
export default class Cl_controlador {
  constructor() {
    this.mAerolinea = new Cl_mAerolinea();
    this.vVuelo = new Cl_vVuelo(this);
    this.vAerolinea = new Cl_vAerolinea(this);
  }
  mostrarVistaVuelo() {
    this.vAerolinea.ocultar();
    this.vVuelo.mostrar();
  }
  mostrarVistaAerolinea() {
    this.vVuelo.ocultar();
    this.vAerolinea.mostrar();
  }
  agregarVuelo({ numero, tipo, costo, pasajeros }) {
    let vuelo = new Cl_mVuelo({ numero, tipo, costo, pasajeros });
    this.mAerolinea.procesarVuelo(vuelo);
    this.vAerolinea.reportarVuelo({
      numero: vuelo.numero,
      tipo: vuelo.tipo,
      costo: vuelo.costo,
      pasajeros: vuelo.pasajeros,
      ingreso: vuelo.ingreso(),
      ingresoTotal: this.mAerolinea.ingresoTotal(),
      menorCantPasajeros: this.mAerolinea.menorCantPasajeros(),
      porcInternacionales: this.mAerolinea.porcInternacionales(),
    });
    this.mostrarVistaAerolinea();
  }
}
