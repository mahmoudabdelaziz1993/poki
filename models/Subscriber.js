//Creating a Auth Model in SubscriberModel.js
var mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");
var SubscriberSchema = new mongoose.Schema({
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  SubscriberName: {
    type: String,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
});

// SubscriberSchema.plugin(passportLocalMongoose);
const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);
module.exports = Subscriber;
