function saludo() {
    alert("Bienvenido Usuario");
    alert("A continuación encontraras unos botones que ejecutan algoritmos realizados con Js puro");

}

function suma(){

    let A = 0;
    let B = 0;
    let SUMA = 0;
    
    A = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));

    SUMA = A + B;
    
    alert("El resultado de la suma es: " + SUMA);

}



function opb(){

    let A = 0;
    let B = 0;
    let SUMA = 0;
    let RESTA = 0;
    let MULTIPLICACIÓN = 0;
    let DIVISIÓN = 0;

    A = parseInt(prompt("Por favor ingrese el primer valor:"));
    B = parseInt(prompt("Por favor ingrese el segundo valor:"));

    SUMA = A + B;
    RESTA = A - B;
    MULTIPLICACIÓN = A * B;
    DIVISIÓN = A / B;

    alert("El resultado de la suma es: " + SUMA);
    alert("El resultado de la resta es: " + RESTA);
    alert("El resultado de la multiplicación es: " + MULTIPLICACIÓN);
    alert("El resultado de la división es: " + DIVISIÓN);

}



function cn(){

    let A = 0;
    
    A = parseInt(prompt("Ingrese cualquier número:"));

    CN = A * A;

    alert("El cuadro del número " + A + " es: " + CN );

}



function at(){

    let B = 0;
    let A = 0;
    
    // Las medidas deben seran leidas en cm.

    B = parseInt(prompt("Ingrese base (b) del triangulo:"));
    A = parseInt(prompt("Ingrese altuta (h) del traindulo:"));

    AT = (B * A) / 2;

    alert("El área de un triangulo es de: " + AT + " cm");

}



function ic(){
    
    let años = 0;
    let interes = 0.017;
    let dinero = 0;
    let ganancias = 0;
    let total = 0;
      
    dinero=parseInt(prompt("Por favor, ingresa la cantidad de dinero que deseas invertir."));
    años=parseInt(prompt("Por favor, indica la cantidad de años en que deseas realizar la inversión."));
    
    ganancias = (dinero * interes) * (años * 12);
    total = ganancias + dinero;
     
    alert("Las ganancias que tendrías invirtiendo $" + dinero + " durante " + años + " años es $" + ganancias + ", es decir que el total sería de $" + total);

}



function pn(){

    let promedio = 0;
    let nota1, nota2, nota3, nota4, nota5, nota6, nota7;

    nota1 = parseFloat(prompt("Ingrese primer nota:"));
    nota2 = parseFloat(prompt("Ingrese segunda nota:"));
    nota3 = parseFloat(prompt("Ingrese tercera nota:"));
    nota4 = parseFloat(prompt("Ingrese cuarta nota:"));
    nota5 = parseFloat(prompt("Ingrese quinta nota:"));
    nota6 = parseFloat(prompt("Ingrese sexta nota:"));
    nota7 = parseFloat(prompt("Ingrese septima nota:"));

    // Cada estudiante sera calificado de 0 a 10, aprobando con una nota superio o igual a 6.2.

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7)/7

    if  ((promedio <6.2)){

        alert("Él estudiante reprobo, su nota final es: " + promedio);

    }
    else 
    {

        alert("Él estudiante aprobo, su nota final es: " + promedio);

    }

}



function ma2n(){

    let n1 = 0;
    let n2 = 0;
    
    n1 = parseInt(prompt("Ingrese primer número"));
    n2 = parseInt(prompt("Ingrese segundo número"));
    
    if (n1 == n2) {
        alert("Los números son iguales:");
    } 
    else {
        if (n1 > n2){
            alert("El número mayor es: " + n1);
        }
        else{
            alert("El número mayor es: " + n2);
        }
    }
    
}



function me3n(){

    let n1 = 0;
    let n2 = 0;
    let n3 = 0;

    n1 = parseInt(prompt("Ingrese primer número"));
    n2 = parseInt(prompt("Ingrese segundo número"));
    n3 = parseInt(prompt("Ingrese tercer número"));

    if ((n1 == n2) && (n1 == n3)){
        
                alert("Los números son iguales:");
            }
            else{
                if ((n1 == n2) && (n1 < n3)){
                    alert("El número menor es: " + n1);
                }
                else{
                    if ((n1 == n3) && (n1 < n2)){
                        alert("El número menor es: " + n1);
                    }
                    else{
                        if ((n2 == n3) && (n2 < n1)){
                        alert("El número menor es: " + n2);
                        }    
                        else{
                            if ((n1 < n2) && (n1 < n3)){
                            alert("El número menor es: " + n1);
                            }
                            else{
                                if ((n2 < n1) && (n2 < n3)){
                                    alert("El número menor es: " + n2);
                                    }
                                else{
                                    alert("El número menor es: " + n3);
                                }    
                            }    
                        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    }
                }
            }

}



function kd(){

    let kilos = 0;
    let precio = 4500;
    let descuento = 0;
    let descontado = 0;
    let totaldes = 0;
    let total = 0;

    kilos=parseInt(prompt("Por favor, ingresa la cantidad de kilos de manzanas que deseas comprar, teniendo en cuenta que 1 kilo cuesta $4500."));

    if(kilos <= 2){
            descuento = 0;
        }
        else{
            if(kilos <= 5){
                descuento = 10;
            }
            else{
                if(kilos <= 8){
                    descuento = 16;
                }
                else{
                    if(kilos >= 9){
                        descuento = 20;
                    }
                }
            }
        } 
    
    total = kilos * precio;
    descontado = total *(descuento / 100);
    totaldes = total - descontado;

    alert("El valor total de " + kilos + " kilo(s) de manzanas sin descuento es de $" + total + ". El descuento que se le aplica es del " + descuento + "%, es decir que el valor final con descuento es de $" + totaldes);

}