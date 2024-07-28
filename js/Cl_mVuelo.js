export default class Cl_mVuelo {
  constructor({ numero, tipo, costo, pasajeros }) {
    this.numero = numero;
    this.tipo = tipo;
    this.costo = costo;
    this.pasajeros = pasajeros;
  }
  set tipo(t) {
    this._tipo = +t;
  }
  get tipo() {
    return this._tipo;
  }
  set pasajeros(p) {
    this._pasajeros = +p;
  }
  get pasajeros() {
    return this._pasajeros;
  }
  set costo(c) {
    this._costo = +c;
  }
  get costo() {
    return this._costo;
  }
  ingreso() {
    return this.costo * this.pasajeros;
  }
}