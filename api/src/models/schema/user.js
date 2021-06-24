import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    userName: {
        // required: true,
        type: String,
    },
    email: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
    },
    memberSince: Date,
    newUser: Boolean,
})

export default mongoose.model('User', UserSchema)