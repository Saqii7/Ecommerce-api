const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({


    name: {
        type: String,
        required: [true, "Please Enter Your Product Name"]
    },

    description: {
        type: String,
        required: [true, "Please Enter Your Product Description"]
    },
    category: {
        type: String,
        required: [true, "Please Enter Your Product Catergory"]
    },

    tags: {
        type: String
    },


    originalPrice: {

        type: Number,
        required: [true, "Please enter your Original Price"]
    },

    discountPrice: {

        type: Number,
    },

    stock: {
        type: Number,
        required: [true, "Please enter Your Stock "]
    },


    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }],
    reviews: [
        {
            name: {
                type: Object
            },
            comment: {
                type: String
            },
            productId: {
                type: string
            },
            createAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    ratings: {
        type: Number
    },
    shopId: {
        type: String,
        required: true
    },
    shop: {
        type: Object,
        required: true
    },
    sold_Out: {
        type: Number,
        default: 0,

    },
    creditAt: {
        type: Date,
        default: Date.now(),

    }





})
module.exports = mongoose.model("Product", productSchema);