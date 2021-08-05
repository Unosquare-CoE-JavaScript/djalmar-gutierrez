const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
        console.log('Mongo db connected');
    }
    catch (err) {
        console.error('Database error', err);
        throw new Error(err);
    }
}