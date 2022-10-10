/* eslint-disable camelcase */
import StudentRepository from '../models/student.js';

export default {
  index: async (req, res, next) => {
    const students = await StudentRepository.findAll();
    const transformData = students.map((student) => {
      return {
        name: student.name,
        averagePercent: (student.first_grade + student.second_grade) / 2,
        average: (student.first_grade + student.second_grade) / 2,
        length: student.first_grade + student.second_grade,
      };
    });
    res.render('index', {students: transformData});
    return next();
  },
  get: async (req, res, next) => {
    res.render('register');
    return next();
  },
  post: async (req, res, next) => {
    console.log(req.body);
    const {name, firstGrade, secondGrade} = req.body;
    const student = await StudentRepository.create({
      name: name,
      first_grade: firstGrade,
      second_grade: secondGrade,
    });
    if (student.dataValues.id) {
      res.render('register', {result: student.dataValues});
    }
    return next();
  },
};
