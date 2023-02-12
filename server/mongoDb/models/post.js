import mongoose from 'mongoose'

const POST = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
});

const POSTSchema = mongoose.model("POSTS", POST)

export default POSTSchema