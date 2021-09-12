var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name: {
        type: String,
        require: true,
        minLength: 3,
        maxlength: 100,
    },
});

GenreSchema.virtual("url").get(function () {
    return "/catalog/genre/" + this._id;
});

module.exports = mongoose.model("Genre", GenreSchema);
