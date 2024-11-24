const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
   customer_id: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    segment: {
      type: String,
      enum: ['Consumer', 'Corporate', 'Home Office'], 
      required: true,
    },
    points: {
      type: Number,
      default: 0,
    },
   
  },
);

userSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    delete returnedObj.hashedPassword; 
  },
});

module.exports = mongoose.model('User', userSchema);
