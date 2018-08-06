
module.exports = {

  MongoClient : require('mongodb').MongoClient,
  assert : require('assert'),
  url : process.env.MONGODB_URI || 'mongodb://localhost:27017',
  dbName: 'heroku_ztd3js1d',
  mongodb: require('mongodb'),
  ObjectID : require('mongodb').ObjectID
  

}