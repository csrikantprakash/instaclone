const mongooose = require('mongoose');
const Schema = mongooose.Schema;
const ObjectId = Schema.ObjectId;

const blogSchema = new mongooose.Schema({
    // Your code goes here
    location: {type:String},
    name : {type: String},
    description: {type: String},
    likes:{type:Number, default:0},
    date: {type:String},
    image:{type:String}
}) 

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;