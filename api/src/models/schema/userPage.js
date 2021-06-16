import mongoose from 'mongoose';

const UserPage = mongoose.Schema({
    _id: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId
    },
    profileImage: String,
    background: String,
    socials: [{
        social: String,
        icon: String,
        text: String,
    }]
}, { _id: false } 
)

export default mongoose.model("UserPage", UserPage)