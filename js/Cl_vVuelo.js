export default class Cl_vVuelo {
  constructor(controlador) {
    this.vista = document.getElementById("vueloForm");
    this.ocultar();
    this.inNumero = document.getElementById("vueloForm_inNumero");
    this.inTipo = document.getElementById("vueloForm_inTipo");
    this.inCosto = document.getElementById("vueloForm_inCosto");
    this.inPasajeros = document.getElementById("vueloForm_inPasajeros");
    this.btAceptar = document.getElementById("vueloForm_btAceptar");
    this.btAceptar.onclick = () =>
      controlador.agregarVuelo({
        numero: this.inNumero.value,
        tipo: this.inTipo.value,
        costo: this.inCosto.value,
        pasajeros: this.inPasajeros.value,
      });
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
}
