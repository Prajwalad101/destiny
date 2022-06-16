import mongoose from 'mongoose';
import app from './app';

mongoose
  .connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log('DB connection successful');
  })
  .catch(() => {
    console.log('Error while connecting to database');
  });

app.listen(4000, () => {
  console.log('The server is listening on port', 4000);
});
