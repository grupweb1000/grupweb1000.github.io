export class CtrlSaludo {
  /** @param {string} nombre */
  calculaSaludo(nombre) {
    const nombreSinEspacios = nombre;
    if (!nombreSinEspacios) {
      throw new Error("Falta proporcionar el nombre.");
    }
    return `${nombreSinEspacios}.`;
  }
}
