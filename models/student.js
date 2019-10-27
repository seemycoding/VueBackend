const Schema = require("mongoose").Schema;
const dbConnection = require("../config/database");
const articleSchema = new Schema({
  rollNo: { type: String },
  name: { type: String },
  address: { type: String },
  college: { type: String },
  courses: [{ type: String }],
  
});

module.exports = dbConnection.model("Student", articleSchema);
