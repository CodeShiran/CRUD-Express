import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'please enter name'],
        },
        quantity: {
            type: Number,
            required: [true, 'please enter a quantity'],
            default: 0,
        },
        price: {
            type: Number,
            required: [true, 'please enter a price'],
            default: 0,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true
    }
)

export const Product = mongoose.model("Product", productSchema)