/*
Para comenzar vamos a crear un objeto sencillo que se usa para guardar información 
sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación 
y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. 
El script imprimirá el nombre y la media de sus calificaciones */

class EstudianteInformacion {
    constructor(nombre, notI, notpro, notHt){
        this.nombre = nombre;
        this.ingles = notI;
        this.programacion = notpro;
        this.html = notHt;
    }

    imprimirPromedio = () => {
        document.write(`el nombre del alumno es ${this.nombre} </br>
            su promedio de notas es: ${(this.ingles + this.programacion + this.html) / 3}`);
    }
}

const estudiante = new EstudianteInformacion("juan", 60, 80, 100);

estudiante.imprimirPromedio();