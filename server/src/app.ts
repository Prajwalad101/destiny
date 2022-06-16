// TODO: Set up a new server

// TODO: Implement mongoose schemas

// TODO: Implement functionality to create new business by the business owner

// TODO: Implement functionality to edit business details

import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/business', async (req, res) => {
  res.json({
    status: 'success',
  });
});

export default app;
