
function estacionDelAnio(elegir) {
    if (elegir >= 1 && elegir <= 3) {
        return "verano";
    } else if (elegir > 3 && elegir<= 6) {
        return "otoño";
    } else if (elegir > 6 && elegir <= 9) {
        return "invierno";
    } else if(elegir >= 10 && elegir <= 12) {
        return "primavera";
    }
  }
  /////////////
  const elegir = prompt("Ingrese un numero del 1 al 12 para saber la estacion del año: "); 
  
  const meses = estacionDelAnio(parseInt(elegir));
  
  document.write(`estas ${elegir}  en: ${meses}`);