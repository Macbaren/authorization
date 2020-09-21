/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from '../config'

mongoose.connection.on('conneted', () => {
  console.log('db is connected')
})

mongoose.connection.on('error', (err) => {
  console.log(`cant connect to db'${err}`)
  process.exit(1)
})

exports.connect = async (mongoURL = config.mongoURL) => {
  mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  return mongoose.connection
}