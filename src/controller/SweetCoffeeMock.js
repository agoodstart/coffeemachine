/**
 * Doel van dit object is het bieden van een interface naar de koffiezetmachine, er is gedrag geimplementeerd
 * echter voel je vrij om dit naar behoefte aan te passen. Zolang de interface van het mock object identiek blijft.
 * 
 * 
 */

class SweetCoffeeMachine {

	constructor()  {
		this.errorState = 0;
		this.errorMessages = ['', 'Geen water: Geen waterdruk', 'Interne Statusfout: Machine is kapot', 'Temperatuur te laag: Machine is kapot'];
		this.milk = 1;
		this.sugar = 1;
		this.chocolate = 5;
		this.making = false;
		this.water = 10;
		this.temperature = 37;

		this.success = {
			callback: this.readyCallback,
			info: {
				error: false,
				onReadyMessage: 'Klaar voor keuze',
			}
		}

		this.error = {
			callback: this.errorCallback,
			info: {
				error: true,
				onErrorMessage: this.errorMessages[this.errorState]
			}
		}
	}
	
	startMachine = (sugar, milk) => {
		if(!this.making) {
			this.making = true;
			this.milk -= milk.toFixed(2);
			this.sugar -= sugar.toFixed(2);

			return this.success;
		} else {
			clearTimeout(this.readyCallback);
			this.errorState = 2;
			this.error.info.onErrorMessage = this.errorMessages[this.errorState];
			return this.error;
		}
	}

	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1] 
	 */
	makeAmericano = (sugar, milk ) => {
		const thisCB = this.startMachine(sugar, milk);
		return thisCB;
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1] 
	 */
	makeCapoccino = (sugar, milk) => {
		const thisCB = this.startMachine(sugar, milk);
		return thisCB;
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1] 
	 */
	makeWienerMelange = (sugar, milk) => {
		this.chocolate -= 1;
		const thisCB = this.startMachine(sugar, milk);
		return thisCB;
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1] 
	 */
	makeChoco = (sugar, milk) => {
		this.chocolate -= 1;
		const thisCB = this.startMachine(sugar, milk);
		return thisCB;
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1] 
	 */
	makeBlackTea = (sugar, milk) => {
		const thisCB = this.startMachine(sugar, milk);
		return thisCB;
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1] 
	 */
	makeEarlGray = (sugar, milk) => {
		const thisCB = this.startMachine(sugar, milk);
		return thisCB;
	}
	
	/**
	 * Callback for retrieving error messages, takes callback function as parameter. Setting the callback 
	 * tiggers a response in a minute
	 */
	errorCallback = (callback) => {
		return new Promise(resolve => setTimeout(() => resolve(callback()), 6000));
	}
	
	/**
	 * Callback for retrieving ready messages, takes callback function as parameter.  Setting the callback 
	 * tiggers a response in a minute
	 */
	readyCallback = (callback) => { 
		return new Promise(resolve => setTimeout(() => resolve(callback()), 5000));
	}
	
}

export default SweetCoffeeMachine;