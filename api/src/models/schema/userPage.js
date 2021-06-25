import mongoose from 'mongoose';

const UserPage = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
    },
    // name: String,
    // userName: String,
    profileImage: String,
    theme: String,
    socials: {
        type: Array
    }
}, {timestamp: true}, 
)

export default mongoose.model("UserPage", UserPage)