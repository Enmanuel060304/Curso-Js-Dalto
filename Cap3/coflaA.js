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
        }
        else{
            alert(`no seas estupido, ya estaba prendio lo apaga`);
        }
    }

    
}

const samsung = new Celulares("rojo", 20, 1024, 64, 16);

samsung.prender();