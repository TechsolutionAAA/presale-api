let mongoose = require("mongoose");

var objUserInfo = {
  email: {
    type: String,
    required: true,
  },
};

let userinfoSchema = mongoose.Schema(objUserInfo);
var UserinfoSchemas = (module.exports = mongoose.model(
  "userinfoSchemas",
  userinfoSchema
));

module.exports.getUsers = function (callback, limit) {
  UserinfoSchemas.find(callback).limit(limit);
};
