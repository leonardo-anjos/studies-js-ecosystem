const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  bio: String,
  avatar: {
    type: String,
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'DevModel'
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: 'DevModel'
  }]
}, {
  timestamps: true // createdAt and updatedAt - generated from mongoose
});

module.exports = model('DevModel', DevSchema);