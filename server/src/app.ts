import express, { NextFunction, Request, Response } from 'express';
import globalErrorHandler from './controllers/errorController';
import businessRouter from './routes/businessRoutes';
import AppError from './utils/appError';

const app = express();

app.use(express.json());

// Routes
app.use('/api/business', businessRouter);

app.all('*', (req: Request, _res: Response, next: NextFunction) => {
  const err = new AppError(
    `Can't find ${req.originalUrl} on this server!`,
    404
  );
  next(err);
});

// Gobal error handling middleware
app.use(globalErrorHandler);

export default app;
