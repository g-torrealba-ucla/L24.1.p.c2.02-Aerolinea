export default class Cl_mAerolinea {
  constructor() {
    this.acTotalIngresos = 0;
    this.menor = Infinity;
    this.cntInternacional = 0;
    this.cntVuelos = 0;
  }
  procesarVuelo(vuelo) {
    this.acTotalIngresos += vuelo.ingreso();
    if (vuelo.pasajeros < this.menor) this.menor = vuelo.pasajeros;
    if (vuelo.tipo === 2) this.cntInternacional++;
    this.cntVuelos++;
  }
  ingresoTotal() {
    return this.acTotalIngresos;
  }
  menorCantPasajeros() {
    return this.menor;
  }
  porcInternacionales() {
    return (this.cntInternacional / this.cntVuelos) * 100;
  }
}
