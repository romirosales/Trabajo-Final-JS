const votar= parseInt(prompt('ingrese su edad para saber si puede votar', ''));
if (Number.isNaN(votar )) {
    document.write('Ingrese un numero por favor');
}else if(votar>=16){
    document.write(`Usted tiene ${votar} años,tiene permitido votar`);
}else{
    document.write('Es menor de edad,NO TIENE PERMITIDO VOTAR')
}
