const Student = require("../models/student");

const StudentController = {
  addStudent: async (req, res, next) => {
    let rollno = req.body.rollno || "";
    let name = req.body.name || "";
    let address = req.body.address || "";
    let college = req.body.college || "";
    let courses = req.body.courses || "";

    let student = await Student.create({
      rollno: rollno,
      name: name,
      address: address,
      college: college,
      courses: courses
    });
    res.json(student);
  },
  getStudents:async(req,res,next)=>{
      let students=await Student.find({},{"name":1});
      res.json(students);
  },
  getStudentsByCourseName:async(req,res,next)=>{
    
    let students=await Student.find({"courses":req.params.coursename},{"name":1});
    res.json(students);
  }
};
module.exports = StudentController;
