class Dealer {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.listOfCars = [];
        this.soldCars = 0;
        this.profit = 0;
    }

    intro() {
        return `Hi, my name is ${this.name}!`
    }

    formatMoney(EUR) {
        return `${EUR.toLocaleString('de-DE')}`
    }

    getCar(carModel, carPrice) {
        let newCar = {
            model: carModel,
            price: carPrice,
        }
        this.listOfCars.push(newCar)
        return `New car everyone! ${carModel} for only ${this.formatMoney(carPrice)} ${this.currency}!`
    }

    carList() {
        let list = '';
        let listNumber = 0;

        for (const car of this.listOfCars) {
            list += `\n${++listNumber}) ${car.model}: ${this.formatMoney(car.price)} ${this.currency};`;
        }

        let header = `${this.name} 's car dealership:`;
        let headerLength = header.length;
        let headerLengthSymbol = '='.repeat(headerLength)
        return `\n${header}\n${headerLengthSymbol}${list}`.replace(/;$/, ".");
    }

    changeCarPrice(index, newPrice) {

        this.listOfCars[index - 1].price = newPrice
        return `New ${this.listOfCars[index - 1].model} price is ${this.formatMoney(newPrice)} EUR.`
    }

    sellCar(index) {
        if (index > this.listOfCars.length) {
            return `SORRY! There is no such car for sale :(`
        } else {
            let newList = this.listOfCars.splice(index - 1, 1)
            console.log(newList)
            this.soldCars++
            this.profit += newList[0].price
            console.log(newList[0].price)
            console.log(this.profit)
            return ` Wow! ${newList[0].model} sold for ${this.formatMoney(newList[0].price)} ${this.currency}!`
        }
    }

    fortune() {
        return `${this.name} has sold ${this.soldCars} cars for total of ${this.formatMoney(this.profit)} ${this.currency}!`
    }
}

export { Dealer }