var expect = require('chai').expect;

describe('test suite 1', () => {
    it('expects true equal true', () => {
        expect(true).to.equal(true);
    })
})

describe('test suite 2', () => {
    describe('test suite 3', () => {
        it('expects true equal true', () => {
            expect(true).to.equal(true);
        })
    })
    it('expects true equal true', () => {
        expect(true).to.equal(true);
    })
})