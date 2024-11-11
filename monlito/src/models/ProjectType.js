import mongoose from 'mongoose';

const ProjectTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['ensayo', 'artículo', 'monografía', 'trabajo final de pregrado', 'trabajo final de especialización']
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

ProjectTypeSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('ProjectType', ProjectTypeSchema);
