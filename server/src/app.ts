import express, { Request, Response } from 'express';
import businessRouter from './routes/business.routes';

const app = express();

app.use(express.json());

// Routes
app.use('/api/business', businessRouter);

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl}`,
  });
});

export default app;
