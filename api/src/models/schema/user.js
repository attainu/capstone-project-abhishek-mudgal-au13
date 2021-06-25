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
    newUser: Boolean,

}, {timestamps: true }
)

export default mongoose.model('User', UserSchema)