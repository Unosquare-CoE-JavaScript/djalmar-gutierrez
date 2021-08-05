var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var request = require('request');

chai.should();
chai.use(sinonChai);
var getUsers = require('../getUsers');

describe('get users test', () => {

    var spy;
    beforeEach(() => {
        spy = sinon.spy();
        sinon.stub(request, 'get').callsFake((url, callback) => {
            callback({}, { body: '{"users":["user1", "user2"]}' })
        })
    })

    afterEach(() => {
        sinon.restore();
    })

    it('calls the callback', () => {
        getUsers(spy);
        spy.should.have.been.calledOnce;
    })

    it('calls the correct URL', () => {
        getUsers(spy);
        request.get.should.have.been.calledWith('http://www.mysite.com/api/users');
    })

    it('Returns correct data in callback', () => {
        getUsers(spy);
        spy.should.have.been.calledWith({ users: ['user1', 'user2'] });
    })
});
