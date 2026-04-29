function calcular() {
const cuenta = parseFloat(document.getElementById("cuenta").value);
const porcentaje = parseFloat(document.getElementById("porcentaje").value);
const personas = parseFloat(document.getElementById("personas").value);

if (isNaNd(cuenta) || cuenta <=0) {
    alert("por favor ingrese un total valido");
    return;
}

if (isNaNd(personas) || personas <=0) {
    alert("por favor ingrese un numero valido de personas");
    return;
}

  const propina = cuenta * (porcentaje / 100);
  const  total = cuenta + propina;
  const porpersona = total / personas;

  document.getElementById("propina").textContent = "Q" + propina.toFixed(2);
  document.getElementById("total").textContent = "Q" + total.toFixed(2);
  document.getElementById("porpersona").textContent = "Q" + porpersona.toFixed(2);
 
  document.getElementById("resultado").style.display = "block";
}