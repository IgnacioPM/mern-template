import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connect: ${conn.connection.name}`.bgWhite.bold)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
