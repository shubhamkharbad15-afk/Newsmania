const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  reads: {
    politics: { type: Number, default: 0 },
    tech: { type: Number, default: 0 },
    climate: { type: Number, default: 0 },
    sports: { type: Number, default: 0 },
    entertainment: { type: Number, default: 0 },
    business: { type: Number, default: 0 },
    health: { type: Number, default: 0 },
    science: { type: Number, default: 0 }
  },
  badges: [{
    type: String
  }],
  totalReads: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

userProgressSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const UserProgress = mongoose.model('UserProgress', userProgressSchema);

module.exports = {
  UserProgress
};
