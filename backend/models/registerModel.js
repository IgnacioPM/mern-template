import mongoose from 'mongoose'

const registerSquema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)
const Register = mongoose.model('Register', registerSquema)
export default Register
