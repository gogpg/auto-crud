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

/*class Dealer {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.carsForSale = [];
        this.soldCars = [];

        console.log(`Hi, my name is ${name}!`);
    }

    formatPrice(price) {
        return `${price.toLocaleString('de-DE')} ${this.currency}`;
    }

    getCar(name, price) {
        this.carsForSale.push({
            name: name,
            price: price,
        });
        return `New car everyone! ${name} for only ${this.formatPrice(price)}!`;
    }

    carList() {
        const header = `${this.name}'s car dealership:`;
        let lineSize = header.length;

        let table = [];

        if (this.carsForSale.length) {
            let index = 1;
            for (const car of this.carsForSale) {
                const tableLine = `${index++}) ${car.name}: ${this.formatPrice(car.price)};`;
                if (tableLine.length > lineSize) {
                    lineSize = tableLine.length;
                }
                table.push(tableLine);
            }
        } else {
            table.push('SORRY! No cars for sale :(');
        }
        return `${header}\n${'='.repeat(lineSize)}\n${table.join('\n')}`;
    }

    changeCarPrice(index, newPrice) {
        this.carsForSale[index - 1].price = newPrice;
        const { name, price } = this.carsForSale[index - 1];
        return `New ${name} price is ${this.formatPrice(price)}.`;
    }

    sellCar(index) {
        if (index > this.carsForSale.length) {
            return `SORRY! There is no such car for sale :(`;
        }

        const soldCar = this.carsForSale[index - 1];
        const { name, price } = soldCar;

        this.carsForSale.splice(index - 1, 1);
        this.soldCars.push(soldCar);

        return `Wow! ${name} sold for ${this.formatPrice(price)}!`;
    }

    fortune() {
        const count = this.soldCars.length;
        const price = this.soldCars.reduce((total, car) => total + car.price, 0);
        const formatedPrice = this.formatPrice(price);
        return `${this.name} has sold ${count} cars for total of ${formatedPrice}!`;
    }
}

*/

export { Dealer }