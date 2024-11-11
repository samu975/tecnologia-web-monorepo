import mongoose from 'mongoose';

const StageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final'],
    unique: true
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

StageSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Stage', StageSchema);
