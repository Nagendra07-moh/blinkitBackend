import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    orderId: { type: String, unique: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    deliveryPartner: { type: mongoose.Schema.Types.ObjectId, ref: "DeliveryPartner" },
    branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: true }
})