import SweetCoffeeMock from './controller/SweetCoffeeMock';

class State {
    constructor() {
        this.sweetCoffeeMock = new SweetCoffeeMock();
        this.coffees = this.createCoffees();
        this.extras = this.createExtras();

        this.errorCallback = this.sweetCoffeeMock.errorCallback;
        this.readyCallback = this.sweetCoffeeMock.readyCallback;
        this.making = false;

        this.success = {
			callback: this.readyCallback,
			info: {
				error: false,
				onMakingMessage: 'Machine maakt ',
				onReadyMessage: 'Klaar voor keuze',
			}
        }
        
        this.error = {
			callback: this.errorCallback,
			info: {
				error: true,
				onErrorMessage: 'Er ging iets fout'
			}
		}
    }

    createCoffees = () => {
        return [
            {
              id: 1,
              name: 'Americano',
              make: this.sweetCoffeeMock.makeAmericano,
              disabled: false
            },
            {
              id: 2,
              name: 'Cappuccino',
              make: this.sweetCoffeeMock.makeCapoccino,
              disabled: false
            },
            {
              id: 3,
              name: 'Wiener melange',
              make: this.sweetCoffeeMock.makeWienerMelange,
              disabled: false
            },
            {
              id: 4,
              name: 'Chocolade',
              make: this.sweetCoffeeMock.makeChoco,
              disabled: false
            },
            {
              id: 5,
              name: 'Zwarte thee',
              make: this.sweetCoffeeMock.makeBlackTea,
              disabled: false
            },
            {
              id: 6,
              name: 'Earl Gray',
              make: this.sweetCoffeeMock.makeEarlGray,
              disabled: false
            }
          ]
    }

    createExtras = () => {
        return [
            {
              id: 1, 
              name: 'Suiker',
              totalAmount: this.sweetCoffeeMock.sugar,
              currentAmount: 0,
              disabled: false
            },
            {
              id: 2,
              name: 'Melk',
              totalAmount: this.sweetCoffeeMock.milk,
              currentAmount: 0,
              disabled: false
            }
          ]
    }
}

export default State;