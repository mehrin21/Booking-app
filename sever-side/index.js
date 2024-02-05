import express from 'express'
import dotenv from 'dotenv'
import cookiesParser from 'cookie-parser'
import cors from 'cors'
import { userRoute } from './routes/userRoute.js'
import { residencyRoute } from './routes/residencyRoute.js'
dotenv.config()

const app = express();

const PORT  = process.env.PORT || 3000
app.use(express.json())
app.use(cookiesParser())
app.use(cors())

app.listen(PORT ,()=>{
    console.log(`sever is running on the port ${PORT}`)
})

app.use('/api/user',userRoute)
app.use('/api/residency',residencyRoute)