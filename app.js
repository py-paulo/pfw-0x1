import Express from 'express';
import db from './database/config.js';
import studentRoutes from './routes/studentRoute.js';

const port = process.env.PORT || 3000;
const dbName = process.env.DB_NAME || 'student';

// eslint-disable-next-line new-cap
const server = Express();

server.use(studentRoutes);

server.set('view engine', 'pug');
server.set('views', './views');

db.sync().then(()=>{
  console.log(`Connected to database "${dbName}";`);
}).catch((err)=>{
  console.log(`Error to connect database: ${err};`);
}).finally(()=>{
  server.listen(
      port,
      ()=>{
        console.log(`Server listenner in port "${port}";`);
      },
  );
});
