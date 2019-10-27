const Schema = require("mongoose").Schema;
const dbConnection = require("../config/database");
const articleSchema = new Schema({
  cid: { type: String },
  CourseName: { type: String },
  professor: { type: String },
  students: [{ type: String }],
  
});

module.exports = dbConnection.model("Course", articleSchema);
