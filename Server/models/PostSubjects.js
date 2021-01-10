const mongoose = require('mongoose')

var PostSubjects = mongoose.model('PostSubjects',
{
    Name : {type:String},
    Description : {type:String},
},'Subjects')

module.exports = { PostSubjects}