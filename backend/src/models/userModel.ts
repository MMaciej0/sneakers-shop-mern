import mongoose, { model, models } from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = models.User || model('User', userSchema);

export default User;
