var request = require('request');

module.exports = (callback) => {
    request.get('http://www.mysite.com/api/users', (err, res) => {
        callback(JSON.parse(res.body));
    })

}