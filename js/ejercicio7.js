// Ejercicio de Lógica
let day = prompt("ingrese día"); 
if (day === null|| day === "") {
    alert (day +"opcion invalida");    
} else {
 day = day.toLowerCase();  
}
if (day ==="" || day ===null) {
    alert (day + "Opcion invalida");    ""
} else 
    day === day.toLowerCase();
if (
    day==="lunes"||
    day === "martes"||
    day === "miercoles"||
    day === "miércoles"||
    day === "jueves"||
    day === "viernes"
 ) {
    alert(" Es un día entre semana");
} else 
    // if ANIDADOS
    if (day=== "sabado"|| day === "sábado"|| day=== "domingo") {
        alert (" es un fin se semana");   
    } else {
        alert (" Favor ingresar solo dias de la semana");
        
    }
 



/**
 * notas
 * 1- Mayusculas
 * 2- Palabras qque son mayusculas
 * 3- vacio
 * 4 - no le de nada 
 * 
 */