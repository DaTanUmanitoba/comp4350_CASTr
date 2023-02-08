const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    user_id: { //the id of the user who posted the post
        type: mongoose.ObjectId,
        required: true,
    },

    content: {
        type: String,
        required: true,
        default: ' ',
    },

    //TODO: Might need to add an access method for image
    image: { 
        type: String,
    },

    post_date: { //the date the post was created
        type: Date,
        required: true,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Post', postSchema);