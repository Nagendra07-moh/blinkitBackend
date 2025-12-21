import mongoose from "mongoose"


export const connectDB = async(uri)=>{
	try{
		if(!uri){
			throw new Error("MONGO_URI is not defined. Please check your .env file")
		}
		await mongoose.connect(uri)
		console.log("Your DB is connected now!!")

	}catch(error){
		if(error.code === 8000 || error.codeName === 'AtlasError'){
			console.error("❌ MongoDB Authentication Failed!")
			console.error("Please check:")
			console.error("  1. Your MongoDB username and password in MONGO_URI")
			console.error("  2. Your IP address is whitelisted in MongoDB Atlas")
			console.error("  3. The database user has proper permissions")
		} else {
			console.error("Error during connectDB:", error.message)
		}
		throw error 
	}
}