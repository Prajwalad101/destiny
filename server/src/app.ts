import express from 'express';
import businessRouter from './routes/business.routes';

const app = express();

app.use(express.json());

// Routes
app.use('/api/business', businessRouter);

export default app;
