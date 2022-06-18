import mongoose from 'mongoose';
import './load-env';

import app from './app';

mongoose
  .connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log('DB connection successful');
  })
  .catch(() => {
    console.log('Error while connecting to database');
  });

app.listen(process.env.PORT, () => {
  console.log('The server is listening on port', process.env.PORT);
});
