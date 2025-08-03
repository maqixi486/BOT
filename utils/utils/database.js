const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: String,
    tickets: { type: Number, default: 0 },
    ansøgninger: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
