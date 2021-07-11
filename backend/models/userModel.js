import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    file: {
      type: String,
    },
    mobileNumber: {
      type: String, 
    },
    gender: {
      type: String,
      enum: ['Male', 'Female']
    },
    location: {
      type: String,
    },
    follower: [{ type: ObjectId, ref: 'User' }],
    following: [{ type: ObjectId, ref: 'User'}],
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User