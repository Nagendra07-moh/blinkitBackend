import mongoose from "mongoose";

const catogerySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }
})

const Category = mongoose.model("Category", catogerySchema)

export default Category