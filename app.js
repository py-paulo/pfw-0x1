import Express from 'express';
import bodyParser from 'body-parser';
import db from './database/config.js';
import studentRoutes from './routes/studentRoute.js';
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const dbName = process.env.DB_NAME || 'student';

// eslint-disable-next-line new-cap
const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(studentRoutes);

app.set('view engine', 'pug');
app.set('views', './views');

db.sync().then(()=>{
  console.log(`Connected to database "${dbName}";`);
}).catch((err)=>{
  console.log(`Error to connect database <> ${err};`);
}).finally(()=>{
  app.listen(
      port,
      ()=>{
        console.log(`Server listenner in port "${port}";`);
      },
  );
});
