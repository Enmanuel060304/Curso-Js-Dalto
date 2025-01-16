/*como primero necesitamos pedirles su dinero disponible */

let dineroCofla = prompt("por favor ingresa el dinero que tienes");
let dineroRoberto = prompt("por favor ingresa el dinero que tienes");
let dineropedro = prompt("por favor ingresa el dinero que tienes");

// Palito de helado de agua: $0.6 USD
// palido de helado de crema: $1 USD
// Bombon helado marca heladix: $1.6 USD
// Bombon helado marca heladovich: $1.7 USD
// Bombon helado marca helardo: $1.8 USD
// potecito de helado con confites: $2.9 USD
// pote de 1/4 Kg - > $2.9 USD

// primero validamos el dinero de cofla

if (dineroCofla >= 2.9)
{
    alert("hey! Tienes dinero, puedes comprarte los helados mas caros que son pote x y pote n");
    
    if(dineroCofla > 2.9)
    {
        alert(`este es tu cambio cofla ${dineroCofla - 2.9}`);
    }
    else{
        alert("no te ha sobrado nada pa");
    }
}
else if(dineroCofla < 2.9 && dineroCofla >= 1.8)
{
    alert("te puedes comprar el helado que vale 1.8");
    if(dineroCofla > 1.8 && dineroCofla < 2.9)
    {   
        alert(`tu vuelto es ${dineroCofla - 1.8}`);
    }
    else{
        alert("no te ha sobrado nada pa");
    }   
}
else if(dineroCofla === 1.7)
{
    alert("te puedes comprar el helado que vale 1.7"); 
}
else if(dineroCofla === 1.6)
{
    alert("te puedes comprar el helado que vale 1.6");  
}
else if(dineroCofla < 1.6 && dineroCofla >= 1)
{
    alert("te puedes comprar el helado que vale 1");
    
    if(dineroCofla > 1 && dineroCofla < 1.6)
    {
        alert(`tu vuelto es ${dineroCofla - 1}`);
    }
}
else if(dineroCofla < 1 && dineroCofla >= 0.6)
{
    alert("te puedes comprar el helado que vale 0.6");
    
    if(dineroCofla < 1 && dineroCofla < 0.6)
    {
        alert(`tu vuelto es ${dineroCofla - 0.6}`);
    }
}
else{
    alert("sos un pobre de mrda, ve a trabajar");
}

//ahora validamos el dinero de Roberto

if (dineroRoberto >= 2.9)
    {
        alert("hey! Tienes dinero, puedes comprarte los helados mas caros que son pote x y pote n");
        
        if(dineroRoberto > 2.9)
        {
            alert(`este es tu cambio Roberto ${dineroRoberto - 2.9}`);
        }
        else{
            alert("no te ha sobrado nada pa");
        }
    }
    else if(dineroRoberto < 2.9 && dineroRoberto >= 1.8)
    {
        alert("te puedes comprar el helado que vale 1.8");
        if(dineroRoberto > 1.8 && dineroRoberto < 2.9)
        {   
            alert(`tu vuelto es ${dineroRoberto - 1.8}`);
        }
        else{
            alert("no te ha sobrado nada pa");
        }   
    }
    else if(dineroRoberto === 1.7)
    {
        alert("te puedes comprar el helado que vale 1.7"); 
    }
    else if(dineroRoberto === 1.6)
    {
        alert("te puedes comprar el helado que vale 1.6");  
    }
    else if(dineroRoberto < 1.6 && dineroRoberto >= 1)
    {
        alert("te puedes comprar el helado que vale 1");
        
        if(dineroRoberto > 1 && dineroRoberto < 1.6)
        {
            alert(`tu vuelto es ${dineroRoberto - 1}`);
        }
    }
    else if(dineroRoberto < 1 && dineroRoberto >= 0.6)
    {
        alert("te puedes comprar el helado que vale 0.6");
        
        if(dineroRoberto < 1 && dineroRoberto < 0.6)
        {
            alert(`tu vuelto es ${dineroRoberto - 0.6}`);
        }
    }
    else{
        alert("sos un pobre de mrda, ve a trabajar");
    }