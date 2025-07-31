import { Request, Response } from "express";
import Course from "../models/courseModel";

export const listCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { category } = req.query;

  try {
    const courses =
      category && category !== "all"
        ? await Course.scan("category").eq(category).exec()
        : await Course.scan().exec();
    res
      .status(200)
      .json({ message: "Courses Retrived Succesfuly", data: courses });
  } catch (error) {
    res.status(500).json({ error: "Error Retriving Courses", Error: error });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  const { courseId } = req.params;

  try {
    const course = await Course.get(courseId);
    if (!course) {
      res.status(404).json({ error: "Course not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "Courses Retrived succesfuly", data: course });
  } catch (error) {
    res.status(500).json({ error: "Error Eetriving Courses", Error: error });
  }
};
