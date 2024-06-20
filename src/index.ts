import express, { Express, Request, Response } from 'express';
// import http from 'http';
// import compression from 'compression';
// import cookieParser from 'cookie-parser';
import addCors from "./middlewares/cors";
// import addInvalidUrlMiddleware from './middlewares/invalidUrls';
import addBodyParser from './middlewares/bodyParser';
import subjectRoutes from './api/routes/subjectRoutes';
const app: Express = express();

// Middlewares
addBodyParser(app);
addCors(app);
// addInvalidUrlMiddleware(app);

// Endpoints
app.get('/health', (req: Request, res: Response) => {
  return res
    .status(200)
    .json({ status: 'alive' });
});
app.use('/subjects', subjectRoutes)

// Server config
const PORT = 4000
app.listen(PORT, () => {
  console.log(`Vial API on port ${PORT}`)
  console.log('Press CTL+C to quit.');
});
