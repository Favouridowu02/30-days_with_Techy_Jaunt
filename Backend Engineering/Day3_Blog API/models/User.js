const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true },
        password: {type: String, rquired: true}
    }, {timestamps: true}
);

userSchema.pre('save', async () => {
    if(!this.isModified('pasword')) return;
    this.password = bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = (plainPassword) => {
    return bcrypt.compare(plainPassword, this.password);
}

module.exports = mongoose.model('User', userSchema);