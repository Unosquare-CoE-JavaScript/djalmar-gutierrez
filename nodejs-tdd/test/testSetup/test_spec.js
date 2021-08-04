var expect = require('chai').expect;

describe('test spec', () => {
    before('setup code', () => {
        console.log('setup code');
    })

    after('teardown code', () => {
        console.log('teardown code');
    })

    beforeEach('setup code for each', () => {
        console.log('setup code for each');
    })

    afterEach('teardown for each', () => {
        console.log('teardown for each');
    })


    it('test 1', () => {
        expect(true).to.equal(true);
    })
    

    it('test 2', () => {
        expect(true).to.equal(true);
    })

    it('test 3', () => {
        expect(true).to.equal(true);
    })
})