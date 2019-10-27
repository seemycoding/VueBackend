var express = require('express');
var router = express.Router();

const StudentController=require("../controllers/Student");
const CourseController=require("../controllers/Course");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//add student
router.post("/addStudent",StudentController.addStudent);
//add courses
router.post("/addCourse",CourseController.addCourse);
//get students name
router.get("/getStudents",StudentController.getStudents);
//get Course name
router.get("/getCourses",CourseController.getCourses);

//get names of all students enrolled in a course
router.get("/getStudents/:coursename",StudentController.getStudentsByCourseName);

module.exports = router;
