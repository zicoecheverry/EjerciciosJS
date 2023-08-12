// Logica y algoritmos
// direccion, estado civil, cedula, celular , correo, salario
// Ingles

let userName = "";
let age = "";
let adDress = "";
let mariatalStatus = "";
let iD = "";
let celPhone = "";
let waGes = "";

function registerData() {
  userName = prompt("Ingresa tu nombre");
  age = prompt("Ingresa tu eda");
  adDress = prompt("ingresa tu dirección");
  maratialStatus = prompt("ingresa tu estado civil");
  iD = prompt("ïngresa tu cedula");
  celPhone = prompt("numero de celúlar");
  waGes = prompt("salario");
}

function showData() {
  alert("Tu nombre es: " + userName + " y tu edad es: " + age);
  alert("tu dirección es:" + adDress);
  alert("tu estado civil es:" + mariatalStatus);
  alert("tu cedula es:" + iD);
  alert("tu celular es:" + celPhone);
  alert("tu sueldo es:" + waGes);
}
