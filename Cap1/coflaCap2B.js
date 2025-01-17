let alumnos = []

let cantidad = prompt("por favor ingrea la cantidad de alumnos");

for (let i = 0; i < cantidad; i++){
    alumnos[i] = [prompt("por favor ingresa el nombre dela alumno " + (i+1)),0];
}

const asistencia = (nombre, i) => {
    let a = prompt(`hola ${alumnos[nombre][0]} asististe el dia ${i}`);
    if (a === "p" || a === "P" ){
        alumnos[nombre][1] += 1; 
    }
}
    
for (let i = 0; i < 30; i++){
    for (alumno in alumnos){
        asistencia(alumno, i+1);       
    }
}

for (alumno in alumnos){
    if (30 - alumnos[alumno][1] < 3){
        alert(`${alumnos[alumno][0]} estas reprobado amigo`);
    }
    else{
        alert(`${alumnos[alumno][0]} has aprovado amigo`);

    }
}