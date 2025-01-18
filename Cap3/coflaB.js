class Celulares {
    constructor(color, peso, tamano, rePant,reCamara, ram)
    {
        this.color = color;
        this.peso = peso;
        this.tamano = tamano;
        this.resolucion = rePant;
        this.resolucioncamara = reCamara;
        this.ram = ram;
        this.estado = false;
    }
    prender = () => {
        if (this.estado === false)
        {
            alert("el fon se prendio*");
            this.estado = true;
        }else{
            alert(`no seas estupido, ya estaba prendio lo apaga`);
        }
    }
    reiniciar = () => {
        if (this.estado === true){
            alert(`El celular se apagara en enseguida`);
        }else{
            alert(`El celular se encuentra apagado`);
        }
    }
    tomarFoto = () => {
        alert(`se ha tomado una foto con la siguiente resolucion ${this.resolucioncamara}, puede revisar la foto en la galeria`);
    }
    grabarVideo = () => {
        alert(`se ha tomado un video con la siguiente resolucion ${this.resolucioncamara}, puede revisar el video en la galeria`);
    }
    mobileInfo = () => {
        return `
            color: ${this.color} </br>
            peso: ${this.peso} </br>
            tamaño: ${this.tamano} </br>
            resolucion: ${this.resolucion} </br>
            resolucion Camara: ${this.resolucioncamara} </br>
            Memoria Ram: ${this.ram} </br>`;
    }
}

// const samsung = new Celulares("rojo", "10kg", "16 pulgadas", "4k", "4k", 16);
// samsung.prender();
// samsung.grabarVideo();
// samsung.tomarFoto();
// samsung.reiniciar();
// document.write(samsung.mobileInfo());


//camara super lenta
//reconomiciento facial 
//camara extra

/* ahora implementar esta monda en celulares en gama alta*/

class GamaAlta extends Celulares{
    constructor(color, peso, tamano, rePant,reCamara, ram, redCamExt){
        super(color, peso, tamano, rePant,reCamara, ram);
        this.resolucionCamaraExtra = redCamExt;
    }

    TomarVideoCamaraLenta = () => {
        alert(`se ha tomado un video en camara lente con la camara ${this.resolucionCamaraExtra}`);
    }

    ReconocimientFacial = () => {
        alert(`telefono desbloqueado`);
    }

    InfoAltaGama = () => {
        return this.mobileInfo() + `
            Camara Extra: ${this.resolucionCamaraExtra} 
        `;
    }
}

celular1 = new GamaAlta("rojo","130g","5.2","4K","3GB","full hd");
celular2 = new GamaAlta("negro","142g","6","4K","4GB", "hd");


document.write(celular1.InfoAltaGama());