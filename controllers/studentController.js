/* eslint-disable camelcase */
import StudentRepository from '../models/student.js';

export default {
  index: async (req, res, next) => {
    const students = await StudentRepository.findAll();
    const transformData = students.map((student) => {
      const average = student.first_grade + student.second_grade;
      return {
        name: student.name,
        averagePercent: average / 2,
        average: average / 2,
        length: student.first_grade + student.second_grade,
        rating: (average < 6) ? 'F': 'A',
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
