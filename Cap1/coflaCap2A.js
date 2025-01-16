

let persona = {
    nombre: "",
    edad: 0,
    hora: 0
}

persona = () => {
    alert(`Bienvenido al programa de cofla o la fiesta de no se quien, me llamo stars`);
    persona.nombre = prompt("Por favor ingresa tu nombre");
    persona.edad = prompt("Por favor ingresa tu edad");
    persona.hora = prompt("Por favor ingresa tu hora de llegada");
}

let validar = () => {

    if(persona.edad >= 18)
    {
        document.write(`Hey Bienvenido ${persona.nombre}, `);

        if (persona.hora >= 2)
        {
            document.writeln(`podes pasar, como llegaste a las ${persona.hora} y eres el primero en llegar despues de las 2 no pagas`);
            return true
        }
        else
        {
            document.writeln(`podes pasar pero tenes que pagar 5 pesos`);
            true;
        }
    }
    else{
        document.write(`Lo siento ${persona.nombre} no puedes entrar`);
        false;
    }
}

persona();
validar();



