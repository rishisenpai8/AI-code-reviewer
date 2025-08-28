import express from 'express'
import aiRoutes from '../src/routes/ai.routes.js'
import cors from 'cors'

const app = express();

// app.get('/', (req, res) => {
//     res.send('hello world')
// })
app.use(cors())
app.use(express.json());
app.use('/ai', aiRoutes)

export default app;