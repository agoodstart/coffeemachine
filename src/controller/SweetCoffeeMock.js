/**
 * Doel van dit object is het bieden van een interface naar de koffiezetmachine, er is gedrag geimplementeerd
 * echter voel je vrij om dit naar behoefte aan te passen. Zolang de interface van het mock object identiek blijft.
 * 
 * 
 */

class SweetCoffeeMachine {

	constructor()  {
		this.milk = 1;
		this.sugar = 1;
		this.chocolate = 5;
		this.making = false;
		this.water = 10;
		this.temperature = 95;
	}
	
	checkMachine() {
		if(this.water = 0) {
			return 1;
		} else if(this.making) {
			return 2;
		} else if(this.temperature < 88) {
			return 3;
		} else {
			return 0;
		}
	}

	startMachine = (sugar, milk) => {
		if(this.checkMachine() > 0) {
			return this.checkMachine()
		} else {
			this.making = true;
			this.milk -= milk.currentAmount.toFixed(2);
			this.sugar -= sugar.currentAmount.toFixed(2);
			this.water -= 1;

			return this.checkMachine();
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