import express from 'express';
import Business from './models/business.model';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/business', async (req, res) => {
  try {
    const business = await Business.create(req.body);
    res.json({
      status: 'success',
      data: business,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err,
    });
  }
});

app.get('/api/business', async (req, res) => {
  try {
    const allBusiness = await Business.find();
    res.json({
      status: 'success',
      data: allBusiness,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err,
    });
  }
});

app.get('/api/business/:id', async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    res.json({
      status: 'success',
      data: business,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err,
    });
  }
});

app.delete('/api/business/:id', async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    res.json({
      status: 'success',
      data: business,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err,
    });
  }
});

app.patch('/api/business/:id', async (req, res) => {
  try {
    const business = await Business.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({
      status: 'success',
      data: business,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err,
    });
  }
});

export default app;
