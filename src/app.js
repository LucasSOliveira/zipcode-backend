import express from 'express';
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';
import log from './utils/logger.js';
import zipcodeRoutes from './routers/zipcode.route.js';
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors({ origin: '*'}));
app.use(express.json());

app.use('/', zipcodeRoutes);

app.listen(PORT, () =>  log.info(`Server running on port ${ip.address()}:${PORT}`) );
