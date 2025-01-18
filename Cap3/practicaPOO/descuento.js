/*
Define un objeto, mediante una expresión, que tenga 
dos propiedades: precio y descuento y un método neto. 
El método calculará el precio con el descuento aplicado. 
Los valores se pedirán por teclado */

let vestido = {
    precio: 50,
    descuento: 50,
    neto: function () {
        return this.precio - (this.precio * (this.descuento / 100));
    }
}

document.write(vestido.neto());