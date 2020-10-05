const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/similarHomes', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('You have connected');
});

const similarHomesSchema = new mongoose.Schema({
  bedrooms: Number,
  baths: Number,
  sqfootage: Number,
  district: String,
  address: String,
  price: Number,
  photo: String,
  brandNew: Boolean,
});

const Homes = mongoose.model('Homes', similarHomesSchema);

const addHome = (newhome) => {
  const home = new Homes({
    bedrooms: newhome.bedrooms,
    baths: newhome.baths,
    sqfootage: newhome.sqfootage,
    district: newhome.district,
    address: newhome.address,
    price: newhome.price,
    photo: newhome.photo,
    brandNew: newhome.brandNew,
  });
  home.save((err) => {
    if (err) {
      console.log('Error Saving');
    }
  });
};

const drop = () => {
  db.dropDatabase();
};

const getAllHomes = (callback) => {
  // Homes.find()
  Homes.aggregate([{ $sample: { size: 15 } }]).exec()
    .then((res) => callback(null, res))
    .catch((err) => console.log(err));
};

module.exports.addHome = addHome;
module.exports.drop = drop;
module.exports.getAllHomes = getAllHomes;

// Homes.aggregate([{ $sample: { size: 15}}]).exec()
