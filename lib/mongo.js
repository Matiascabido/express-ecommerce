const { MongoClient } = require('mongodb')
const { config } = require('../config')

const USER = encodeURIComponent(config.dbUser)
const PASS = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const MONGO_URI = `mongodb://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${DB_NAME}?ssl=true&authSource=admin&retryWrites=true`

class MongoLib{
  constructor(){
    this.client = new MongoClient(MONGO_URI,{useNewUrlParser:true})
    this.dbName = DB_NAME
  }

  connect (){
    return new Promise((resolve, reject) =>{
      this.client.connect(error => {
        if(error){
          reject(error)
        }
        console.log('Connected to mongo')
      })
      resolve(ths.client.db(this.dbName))
    })
  }

  getAll(collection, query){
    return this.connect().then(db => {
      return db.collection(collection).find(query).toArray()
    })
  }


}

module.exports = MongoLib