import StudentRepository from '../models/student.js';

export default {
  index: async (request, response) => {
    const students = await StudentRepository.findAll();
    response.render('index', {students: students});
  },
  register: async (request, response) => {
    response.render('register');
  },
};
