/* 
Descrizione:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
 */

const cars =[
	{
		brand: 'BMW',
		model: 'sub',
		fuelType: 'diesel'
	},
    {
		brand: 'Suzuki',
		model: 'sub',
		fuelType: 'benzina'
	},
    {
		brand: 'Yaris',
		model: 'sub',
		fuelType: 'gpl'
	},

    {
		brand: 'Lancia',
		model: 'sub',
		fuelType: 'elettrico'
	},

    {
		brand: 'FIAT',
		model: 'sub',
		fuelType: 'metano'
	},

    {
		brand: 'JEEP',
		model: 'sub',
		fuelType: 'diesel'
	},

    {
		brand: 'Ferrari',
		model: 'sub',
		fuelType: 'benzina'
	},

    {
		brand: 'TESLA',
		model: 'sub',
		fuelType: 'elettrico'
	},

    {
		brand: 'SUKUZI',
		model: 'sub',
		fuelType: 'metano'
	},

    {
		brand: 'YODA',
		model: 'sub',
		fuelType: 'diesel'
	},


];

const oilCars = cars.filter(car => car.fuelType == "benzina")

console.log(oilCars);

const dieselCars = cars.filter(car => car.fuelType == "diesel")

console.log(dieselCars);

const otherCars = cars.filter(car => car.fuelType !== "benzina" && car.fuelType !== "diesel")

console.log(otherCars);

