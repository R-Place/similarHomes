const db = require('./index.js');

db.drop();

const randomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const bedrooms = [2, 3, 4];

const baths = [1, 2, 3];

const sqfootage = [1200, 1622, 1432, 1890, 2102, 2219, 1352, 1029, 1609, 1634, 1478, 2010, 1589];

const district = ['Lower Haight', 'Parkside', 'Miraloma Park', 'Bernal Heights', 'Outer Sunset', 'Twin Peaks', 'Russian Hill', 'West Portal', 'Parkside', 'Portola', 'Excelsior', 'St. Francis Wood'];

const address = ['420 Precita Ave', '430 Lily St', '33 Shields St', '354 Eddy St', '36 Cragmont Ave', '216 Eddy St', '1405 Gough St', '189 Majestic Ave', '209 Blythedale Ave', '1366 33rd Ave', '1650 Page St #104', '254 Bright St', '2701 Green St', '184 Linda St', '1366 33rd Ave', '794 Mcallister St', '66 Ceres St', '766 Sutter St'];

const price = [1302934, 1349009, 1446011, 1243011, 1013014, 1526125, 1245366, 1245039, 2049509];

const photos = ['https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.501642_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.502667_3.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.502775_1.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.504311_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.504528_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.504737_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.504756_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.505508_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.505643_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.505685_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.505794_2.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.505817_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506060_1.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506215_2.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506226_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506270_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506308_1.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506323_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506383_3.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506416_1.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506460_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506535_2.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506544_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506592_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506656_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.506825_0.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.ML81811663_6.jpg', 'https://r-place-photos.s3.us-east-2.amazonaws.com/genMid.ML81812317_3.jpg'];

const brandNew = [true, false, false, false];

const generateRandomListing = () => {
  const listing = {};
  listing.bedrooms = randomItem(bedrooms);
  listing.baths = randomItem(baths);
  listing.sqfootage = randomItem(sqfootage);
  listing.district = randomItem(district);
  listing.address = randomItem(address);
  listing.price = randomItem(price);
  listing.photo = randomItem(photos);
  listing.brandNew = randomItem(brandNew);
  return listing;
};

for (let i = 0; i < 100; i += 1) {
  db.addHome(generateRandomListing());
}
