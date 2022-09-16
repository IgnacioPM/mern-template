import express from 'express'
import colors from 'colors'
import 'dotenv/config'

import registerRoutes from './routes/registerRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js'
import { connectDB } from './config/db.js';

const app = express()
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/register', registerRoutes)
app.use(errorHandler)
app.listen(port, () => console.log(`Express server listening on port ${port}`))
