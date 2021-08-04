const Checkout = require('../checkout.js');

const expect = require('chai').expect;

beforeEach(() => {
    checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 3);

})

it('Add an item price', () => {
    checkout.addItemPrice('a', 1);
})

it('Add an item', () => {
    checkout.addItem('a');
})

it('Can calculate de total', () => {
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
})


it('Can calculate de total with multiple items', () => {
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(4);
})

it('Can add discount', () => {
    checkout.addItem('a');
    checkout.addItem('b');
    checkout.addDiscount('a', 3, 2);
})

it('Can reflect dicount in total', () => {
    checkout.addDiscount('a', 3, 2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2)
})

it('throws error when item has no price', () => {
    expect(()=>{checkout.addItem('z')}).to.throw();
})