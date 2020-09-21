// const { MONGO_CLOUD_USERNAME, MONGO_CLOUD_PASSWORD, DB_NAME } = require('../../config/config');
const mongoose = require('mongoose');
// const mongoUri = 'mongodb://localhost/hostInfo';
const mongoUri = `mongodb+srv://admin:admin@cluster0.9j0yc.mongodb.net/hostProfileDB`;

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => console.log('!!! Mongoose is connected !!!'));

mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

module.exports = db;





