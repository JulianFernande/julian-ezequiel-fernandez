function mostrar()
{
	let consultaDeIngreso;
	let origen;
	let cantidadVacunas=0;
	let costoVuelo;

	let origenMenosCantidad=0;
	let promedioPorVuelo;
	let promedioPorVueloVacunasOccidente;
	let totalSinDescuentoDeLosViajes;

	let descuentoDiezMillones;
	let descuentoEntreCincoYOcho;

do {
	origen=prompt("Ingrese su origen").toLowerCase();
	while (origen !="oriente" && origen!= "occidente" && origen!="secreto") {
		origen=prompt("Ingrese un origen VALIDO").toLowerCase();
	}

	cantidadVacunas=parseInt(prompt("Ingrese la cantidad de vacunas entre 5.000.000 y 25.000.000"));
	while (cantidadVacunas <5000000 || cantidadVacunas>25000000 || isNaN(cantidadVacunas)) {
		cantidadVacunas=parseInt(prompt("Ingrese la cantidad VALIDA de vacunas entre 5.000.000 y 25.000.000"));
	}

	costoVuelo=parseInt(prompt("Su costo de vuelo entre 1.000.000 y 5.000.00"));
	while (costoVuelo < 1000000 || costoVuelo > 5000000|| isNaN(costoVuelo) ) {
		costoVuelo=parseInt(prompt("INVALIDO. Su costo de vuelo entre 1.000.000 y 5.000.00"));
	};



	switch (origen) {
		case "occidente":
			cantidadVacunasOccidente= cantidadVacunasOccidente+ cantidadVacunas;
				
			
			break;
	
		case "oriente":
			cantidadVacunasOriente= cantidadVacunasOriente+cantidadVacunas;
			break;

		case "secreto":
			cantidadVacunasSecreto= cantidadVacunasSecreto+cantidadVacunas;
	}
		
	
	
	consultaDeIngreso=prompt("Ingresan mas vuelos si o no").toLowerCase();
} while (consultaDeIngreso== "si");	


}