import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDb from './mongoDb/connect.js';
import postRoute from './routes/postRoute.js'
import dalleRoute from './routes/dalleRoute.js'


dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({
    limit: "50mb"
}))

app.use("/api/v1/post" , postRoute)
app.use("/api/v1/dalle",dalleRoute)

app.get("/", async(req,res) => {
    res.send("Hello world")
})

const port = process.env.PORT || 8080

const startServer = async() => {

    try {
        connectDb(process.env.MONGO_URI)
        app.listen(port , () => console.log(`Server is running on port http://localhost:${port}`))

    } catch (err) {
        console.error(err)
    }

}

startServer();