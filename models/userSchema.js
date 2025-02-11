const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'], 
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must be at least 8 characters long and contain both letters and numbers.']
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error('Password comparison failed');
  }
};

userSchema.methods.generateAuthToken = function () {
  try {
    const token = jwt.sign({ _id: this._id, email: this.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new Error('Error generating token');
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;








































































































