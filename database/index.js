const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;

mongoose.connect('mongodb://localhost/similarHomes', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://172.17.0.3:27017/similarHomes', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://172.17.0.3:27017/similarHomes', { useNewUrlParser: true, useUnifiedTopology: true });

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
  favorited: Boolean,
  index: Number,
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
    favorited: newhome.favorited,
    index: newhome.index,
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
    .catch((err) => callback(err));
};

const favoriteHome = (id, isfavorited, callback) => {
  Homes.updateOne(
    { _id: ObjectId(id) },
    { $set: { favorited: isfavorited } },
  )
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const findFavorited = (callback) => {
  Homes.find({ favorited: true })
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

module.exports.addHome = addHome;
module.exports.drop = drop;
module.exports.getAllHomes = getAllHomes;
module.exports.favoriteHome = favoriteHome;
module.exports.findFavorited = findFavorited;

// Homes.aggregate([{ $sample: { size: 15}}]).exec()
