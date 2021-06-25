import mongoose from 'mongoose';

const UserPage = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
    },
    
    name: String,
    // userName: String,
    profileImage: String,
    theme: String,
    socials: {
        type: Array
    },

    browserType: {
        firefox: Number,
        chrome: Number,
        edge: Number,
        opera: Number,
        ie: Number,
        safari: Number,
        other: Number
    },
    OSType: {
        linux: Number,
        android: Number,
        windows: Number,
        mac: Number,
        chromeOS: Number,
        other: Number
    },
    deviceType: {
        mobile: Number,
        tablet: Number,
        desktop: Number,
        other: Number
    },
}, {timestamp: true}, 
)

export default mongoose.model("UserPage", UserPage)
