import { mongoose } from 'mongoose'

export const getConnectionMongoDB = async () => {
  const urlConnection = process.env.MONGO_URI
  try {
    await mongoose.connect(urlConnection)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}
