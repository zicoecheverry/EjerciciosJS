let departamento = prompt (" ingrese el nombre de un departamento");

if (departamento === null || departamento === "") {
  alert("opcion invalida");
} else {
  departamento ===  departamento.toLowerCase();
}
let visita = prompt(" ingrese el motivo de la visita");
if (visita === null || visita === "") {
  alert("opcion invalida");
  visita =visita.toLowerCase();
} else {
  if (departamento === "cundinamarca" && visita === "museos") {
    alert("En cundinamarca esta el museo del oro, el museo nacional y el museo botero");
  } else {
    if (departamento === " cundinamarca" && visita === " comida" || "turismo") {
      alert("opcion no valida ");
    } else {
      if (departamento === "valle de cauca" && visita === "turismo") {
        alert( " en valle del cauca  esta la hacienda el paraiso y el lago calima");
      } else {
        
      }
    }
  }
}
