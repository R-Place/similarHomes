const db = require ('./index.js')

db.drop()

var randomItem = (array) =>{
  var randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

var bedrooms = [2,3,4]


var baths = [1,2,3]


var sqfootage = [1200,1622,1432,1890,2102,2219,1352,1029,1609,1634,1478,2010,1589]



var district = ['Marina', 'Mission', 'SOMA', 'NOPA', 'Sunset', 'Twin Peaks', 'Russian Hill', 'Dogpatch']



var address = ['420 Precita Ave', '430 Lily St', '33 Shields St', '354 Eddy St', '36 Cragmont Ave', '216 Eddy St', '1405 Gough St', '189 Majestic Ave', '209 Blythedale Ave', '1366 33rd Ave', '1650 Page St #104', '254 Bright St', '2701 Green St', '184 Linda St', '1366 33rd Ave', '794 Mcallister St', '66 Ceres St', '766 Sutter St']


var price = [1302934, 1349009,1446011, 1243011, 1013014,1526125, 1245366, 1245039, 2049509, 1237189, 14552149, 1583255, 1495873, 1920193]


var generateRandomListing = () => {
  var listing = {}
  listing.bedrooms = randomItem(bedrooms)
  listing.baths = randomItem(baths)
  listing.sqfootage = randomItem(sqfootage)
  listing.district = randomItem(district)
  listing.address = randomItem(address)
  listing.price = randomItem(price)
  return listing
}

for(var i = 0; i < 100; i++){
  db.addHome(generateRandomListing())
}