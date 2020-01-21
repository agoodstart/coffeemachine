import SweetCoffeeMock from './SweetCoffeeMock';

class State {
    constructor() {
        this.sweetCoffeeMock = new SweetCoffeeMock();
        this.coffees = this.createCoffees();
        this.extras = this.createExtras();
        this.errorMessages = ['', 'Geen water: Geen waterdruk', 'Interne Statusfout: Machine is kapot', 'Temperatuur te laag: Machine is kapot'];
        this.errorState = 0;
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

    updateState = (appState) => {
        if(!this.errorState) {
            this.sweetCoffeeMock.making = false;
            this.errorState = 0;

            return {
                extras: appState.extras.map(extra => {
                    if(extra.name === 'Suiker') {
                        extra.totalAmount = this.sweetCoffeeMock.sugar
                        if(this.sweetCoffeeMock.sugar <= 0) {
                          extra.disabled = true;
                        }
                      } else if(extra.name === 'Melk') {
                        extra.totalAmount = this.sweetCoffeeMock.milk
                        if(this.sweetCoffeeMock.milk <= 0) {
                          extra.disabled = true;
                        }
                      }
                      return extra;
                }),

                coffees: appState.coffees.map(coffee => {
                    if(coffee.name === 'Cappuccino') {
                        if(this.sweetCoffeeMock.sugar <= 0 || this.sweetCoffeeMock.milk <= 0) {
                          coffee.disabled = true;
                        }
                      } else if(coffee.name === 'Chocolade' || coffee.name === 'Wiener melange') {
                          if(this.sweetCoffeeMock.chocolate <= 0) {
                            coffee.disabled = true;
                          }
                      }
                      return coffee;
                })
            };
        } else {
        return;
        }
    }

    resetState = (appState) => {
      this.errorState = 0;
      this.sweetCoffeeMock.making = false;
      this.sweetCoffeeMock.sugar = 1;
      this.sweetCoffeeMock.milk = 1;
      this.sweetCoffeeMock.chocolate = 5;
      this.sweetCoffeeMock.water = 10;
      this.sweetCoffeeMock.temperature = 95;
  
      return {
          extras: appState.extras.map(extra => {
              extra.totalAmount = 1;
              extra.currentAmount = 0;
              extra.disabled = false;
      
              return extra
          }),
  
          coffees: appState.coffees.map(coffee => {
              coffee.disabled = false;
      
              return coffee;
          })
      }
  }

    onSuccess = (name) => {
      return {
        callback: this.sweetCoffeeMock.readyCallback,
        info: {
          error: false,
          onMakingMessage: `Machine maakt ${name}`,
          onReadyMessage: 'Klaar voor keuze',
        }
      }
    }

    onError = () => {
      return {
        callback: this.sweetCoffeeMock.errorCallback,
        info: {
          error: this.errorState > 0,
          onErrorMessage: this.errorMessages[this.errorState]
        }
      }
    }

    checkForErrorsOnMountingOrUpdating = () => {
      this.errorState = this.sweetCoffeeMock.checkMachine();
      return this.onError();
    }

    checkForErrorsOnMaking = (coffeeObj) => {
      const {milk, sugar} = coffeeObj.coffeeIngredients;

      this.errorState = coffeeObj.coffeeMethod(milk, sugar);

      if(!this.errorState) {
        return this.onSuccess(coffeeObj.coffeeName)
      } else {
        clearTimeout(this.sweetCoffeeMock.readyCallback);
        return this.onError();
      }
    }
}

export default State;