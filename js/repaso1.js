let departamento = prompt ("ingrese el nombre de un departamento");

if (departamento === null || departamento ==="") {
 alert ("opcion invalida");  
} else {
departamento = departamento .toLowerCase ();
if (departamento === "cundinamarca") {
  alert("la capital de cundinamarca es : Bogotá");   
} else {
  if (departamento === "quindio") {
    alert("la capital del quindio es: armenia");
  } else {
    if (departamento === "antioquia") {
      alert ("la capital de Antioquia es: Medellin")  
    } else {
      if (departamento === "valle" || departamento === "valle del cauca"){
       alert("la capital del valle es : Cali");
      } else {
        alert("El valor ingresado es un valor invalido");
      }  
    }
  }  
}  
}