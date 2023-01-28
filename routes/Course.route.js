const express = require("express");
const courseRouter = express.Router();
const { body, validationResult } = require("express-validator");
const { AuthModel } = require("../model/Auth.model");
const { courseModel } = require("../model/Course.model");
const { VarifyToken } = require("../middleware/VarifyToken");

courseRouter.post("/add", async (req, res) => {
  let payload = { ...req.body };
  try {
    const new_course = new courseModel(payload);
    await new_course.save();
    res.send("Course added sucessfully");
  } catch (error) {
    console.log(error);
  }
});

courseRouter.get("/allcourse", async (req, res) => {
  try {
    const course = await courseModel.find();
    res.send(course);
  } catch (error) {
    res.send({ msg: error });
  }
});

courseRouter.get("/singleCourse/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const course = await courseModel.find({ _id: id });
    res.send(course);
  } catch (error) {
    res.send({ msg: error });
  }
});

module.exports = {
  courseRouter,
};
