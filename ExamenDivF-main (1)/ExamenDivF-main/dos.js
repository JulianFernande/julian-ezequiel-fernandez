function mostrar()
{
   let personaIngresada;
   let nacionalidad;
   let resultado;
   let edad;
   let cepa;

   let personasNegativo;
   
    let cantidadDelta=0;
    let cantidadBeta=0;
    let cantidadAlfa=0;

    let cantidadDeltaExtranjero=0;

    let cantidadPositivos=0;
   let cantidadNegativos=0;
   let porcentajesPositivos;
   let procentajesNegativos;
   let flag=0;

   let cepaMenosEncontrada;
   let edadMenorArgentinoContagiado;

   let cantidadDePersonasExtrangerasContagiadasconDelta=0;

   for (let i = 0; i < 8; i++) { //aca va un 8
      
       personaIngresada=prompt("Por favor introduzca su nombre").toLowerCase();

       nacionalidad=prompt("Ingrese si es ARGENTINO o EXTRANJERO").toLowerCase();
       while (nacionalidad != "argentino" && nacionalidad!= "extranjero" ) {
        nacionalidad=prompt("Dato NO VALIDO. Ingrese si es ARGENTINO o EXTRANJERO").toLowerCase();
           
       };
       

       resultado=prompt("Ingrese su resultado POSITIVO o NEGATIVO").toLowerCase();
       while (resultado !="positivo" && resultado!="negativo") {
           resultado=prompt("DATO NO VALIDO. Ingrese su resultado POSITIVO o NEGATIVO").toLowerCase();
       };

       edad=parseInt(prompt("Su edad entre 18 y 65"));
        while (edad <18 || edad>65 || isNaN(edad) ){ 
            edad=parseInt(prompt("DATO INVALIDO. Ingrese una edad entre 18 y 65"));}

        cepa=prompt("Ingrese su cepa DELTA, ALFA, BETA o NINGUNA").toLowerCase();
        if (cepa== "ninguna") {
         resultado= "negativo"   
         cantidadNegativos++
        }else{
        while (cepa !="delta" && cepa != "alfa" && cepa!="beta") {
            edad= prompt("DATO INVALIDO. Ingrese una cepa valida").toLowerCase()
        }
        cantidadPositivos++
        }
       
        switch (cepa) {
            case "delta":
                if (nacionalidad== "extranjero") {
                    cantidadDePersonasExtrangerasContagiadasconDelta++
                }
                 cantidadDelta++
                break;
            case "beta":
                cantidadBeta++
            break;
            case "alfa":
                cantidadAlfa++
                break;
           
        }
    if (nacionalidad== "argentino" && flag==0) {
        edadMenorArgentinoContagiado= edad;
        flag=1
    }
    if (edadMenorArgentinoContagiado < edad) {
        edadMenorArgentinoContagiado=edad;
    }
    }

        

    // for

    porcentajesPositivos=parseFloat( cantidadPositivos * 0.8);
    alert("Porcetaje de positivos "+ porcentajesPositivos);

    procentajesNegativos=parseFloat( cantidadNegativos * 0.8);
    alert("Porcentaje de negativos "+ procentajesNegativos);

    if (cantidadDelta < cantidadBeta && cantidadDelta < cantidadAlfa) {
        cepaMenosEncontrada= "Delta"
    } else if(cantidadBeta < cantidadDelta && cantidadBeta < cantidadAlfa){
        cepaMenosEncontrada="Beta"
    }else{
        cepaMenosEncontrada="Alfa"
    }
    alert("argentino menor edad es" + edadMenorArgentinoContagiado);
    alert("la cepa menos es encontrada es "+ cepaMenosEncontrada);
    alert("La cantidad de personas extranjeras con delta son " + cantidadDePersonasExtrangerasContagiadasconDelta);

}