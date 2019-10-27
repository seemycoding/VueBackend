const Course = require("../models/course");

const CourseController = {
  addCourse: async (req, res, next) => {
    let cid = req.body.cid || "";
    let CourseName = req.body.CourseName || "";
    let professor = req.body.professor || "";
    let students = req.body.students || "";
    console.log("jb"+cid);
    let course = await Course.create({
      cid: cid,
      CourseName:CourseName,
      professor: professor,
      students: students
    });
    console.log(course)
    res.json(course);
  },
  getCourses:async(req,res,next)=>{
    let courses=await Course.find({},{"CourseName":1});
    res.json(courses);
}
};
module.exports = CourseController;