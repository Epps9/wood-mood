const mongoose = require('mongoose');

const watchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: {type: String, required: true},
});

module.exports = mongoose.model('Watch', watchSchema);
