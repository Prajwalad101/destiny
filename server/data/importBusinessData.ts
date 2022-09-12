import { IBusiness } from '@destiny/common/types';
import fs from 'fs';
import mongoose from 'mongoose';
import '../src/loadEnv';
import Business from '../src/models/businessModel';

const DB = process.env.DB as string;

mongoose.connect(DB).then(() => {
  console.log('DB connection successful');
});

// READ JSON FILE
const businesses: IBusiness[] = JSON.parse(
  fs.readFileSync(`${__dirname}/businessData.json`, 'utf-8')
);

// prevent duplication of data
const uniqueBusinesses = [
  ...new Map(businesses.map((item) => [item['name'], item])).values(),
];

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Business.create(uniqueBusinesses);
    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Business.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
