const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = User = model('user', userSchema);
