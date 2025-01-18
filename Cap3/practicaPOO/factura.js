class clientes {
    constructor(nombre, correo, numero){
        this.nombre = nombre;
        this.correo = correo;
        this.numero = numero;
    }
}

const juan = new clientes("Juan", "juan#mail.com", 3456718);
const luis = new clientes("Marisa", "marisa@mail.com", 5556123);
const maria = new clientes("Luis", "luis@mail.com", 2354322);

class Factura extends clientes{
    constructor(nombre, correo, numero, id, total){
        super(nombre,correo, numero)
        this.clienteId = id;
        this.total = total;
        this.estado = false;
    }


    cobrar = () => {
        if (this.estado === false){
            this.estado = true;
            return `la factura se ha cobrado con exito`;
        }
        else{
            return `La factura ya ha sido pagada`;
        }
    }

    imprimir = () => {
        if (this.estado === false){
                    
            return `la factura esta pendiente por pagarse <br/>`;
        }
        else{
            return `Los datos del cliente son los sig <br/>
                    id: ${this.clienteId}  <br/>
                    Cliente: ${this.nombre} <br/>
                    correo: ${this.correo} <br/>
                    numero: ${this.numero} <br/>
                    <b>Datos de la factura </b>  <br/>
                    total pagado: ${this.total}  <br/>
                `
        }
    }

}

const factura1 = new Factura(juan.nombre, juan.correo, juan.numero, "000001", 400);


document.write(factura1.imprimir());
document.write(factura1.cobrar());
