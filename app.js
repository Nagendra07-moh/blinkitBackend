import 'dotenv/config'
import {connectDB} from './src/config/connect.js'
import fastify from 'fastify'
import { PORT } from './src/config/config.js'

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        const app = fastify()

        app.listen({port:PORT,host:'0.0.0.0'},(err,addr)=>{
            if(err){
                console.warn("Yo got an error",err)
            }else{
                console.log("Your Server is running!!",addr)
            }
        })
    } catch (error) {
        console.error("Failed to start server:", error.message)
        console.error("Please check your MongoDB connection string (MONGO_URI) in your .env file")
        process.exit(1)
    }
}

start()