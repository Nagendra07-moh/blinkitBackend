import mongoose from 'mongoose'

// Base user schema

const userSchema = new mongoose.Schema({
    name: { type: String },
    type: {
        type: String,
        enum: ["Customer", "Admin", "DeliveryDetails"],
        required: true
    },
    isActivated: { type: Boolean, default: false }
})

// customer Schema

const customerSchema = new mongoose.Schema({
    ...userSchema.obj,
    phone: { type: Number, required: true, unique: true },
    role: { type: String, enum: ["Customer"], default: "Customer" },
    liveLocation: {
        latiture: { type: Number },
        longitude: { type: Number }
    },
    address: { type: String }
})


// delivery partner schema

const deliveryPartnerSchema = new mongoose.Schema({
    ...userSchema.obj,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, enum: ["DeliveryPartner"], default: "DeliveryPartner" },
    liveLocation: {
        latiture: { type: Number },
        longitude: { type: Number }
    },
    address: { type: String },
    branch: {
        type: mongoose.Schema.ObjectId,
        ref: "Branch"
    }
})

// Admin Schema

const adminSchema = new mongoose.Schema({
    ...userSchema.obj,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["Admin"], default: "Admin" },
})


export const Customer = mongoose.model("Customer", customerSchema)
export const DeliveryPartner = mongoose.model("DeliveryPartner", deliveryPartnerSchema)
export const Admin = mongoose.model("Admin", adminSchema)