const mongoose = require('mongoose')

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hours in seconds
    }
})

// // Create an index on the token field for faster lookups
// blacklistTokenSchema.index({ token: 1 })

const BlacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema)

module.exports = BlacklistToken