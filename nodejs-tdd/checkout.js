module.exports = class Checkout {

    constructor() {
        this.prices = {};
        this.total = 0;
        this.discounts = {};
        this.items = {};
    }

    addItemPrice(item, price) {
        this.prices[item] = price;
    }

    addItem(item) {
        if (!this.prices[item]) {
            throw new Error('Item not found');
        }
        this.items[item] ?
            this.items[item] += 1 :
            this.items[item] = 1;
    }

    calculateTotal() {
        for (let item in this.items) {
            this.total += this.calculateItemTotal(item);
        }
        return this.total;
    }

    calculateItemDiscount(item) {
        var subTotal = 0;
        subTotal += (this.items[item] / this.discounts[item].cnt) * this.discounts[item].price;
        subTotal += (this.items[item] % this.discounts[item].cnt) * this.prices[item];
        return subTotal;
    }

    calculateItemTotal(item) {
        var subTotal = 0;
        if (this.discounts[item]) {
            subTotal += this.calculateItemDiscount(item);
        } else {
            subTotal += this.prices[item] * this.items[item];
        }
        return subTotal;
    }

    addDiscount(item, itemCnt, discountPrice) {
        this.discounts[item] = { cnt: itemCnt, price: discountPrice };
    }
}