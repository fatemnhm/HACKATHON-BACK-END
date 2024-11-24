const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    // Linking User to Customers if Users manage Customers
    customers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
      },
    ],
  },
  { timestamps: true }
);

userSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    delete returnedObj.hashedPassword; // Remove password when converting to JSON
  },
});

module.exports = mongoose.model('User', userSchema);
