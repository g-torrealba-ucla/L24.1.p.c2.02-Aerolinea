export default class Cl_vAerolinea {
  constructor(controlador) {
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.btAgregar = document.getElementById("mainForm_btAgregar");
    this.lblIngresoTotal = document.getElementById("mainForm_lblIngresoTotal");
    this.lblMenorNumPasajeros = document.getElementById(
      "mainForm_lblMenorNumPasajeros"
    );
    this.lblPorcInternacionales = document.getElementById(
      "mainForm_lblPorcInternacionales"
    );
    this.btAgregar.onclick = () => controlador.mostrarVistaVuelo();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  reportarVuelo({
    numero,
    tipo,
    costo,
    pasajeros,
    ingreso,
    ingresoTotal,
    menorCantPasajeros,
    porcInternacionales
  }) {
    this.tabla.innerHTML += `
    <tr>
      <td>${numero}</td>
      <td>${tipo}</td>
      <td>${costo}</td>
      <td>${pasajeros}</td>
      <td>${ingreso}</td>
    </tr>`;
    this.lblIngresoTotal.innerHTML = ingresoTotal;
    this.lblMenorNumPasajeros.innerHTML = menorCantPasajeros;
    this.lblPorcInternacionales.innerHTML = porcInternacionales;
  }
}
