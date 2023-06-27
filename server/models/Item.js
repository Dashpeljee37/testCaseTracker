const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Please insert item name!"],
        trim: true,
        maxlength: [50,'Item name is more than 50!']
    },
    id: {
      type: Number,
      unique: true,
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'item description is more than 500!']
    },
    type: {
        type: String,
        required: [true, "please insert item type!"],
        trim: true,    
    },
    created_date: {
        type: Date,
        required: [true, "please insert created_date!"],
    },
    status: {
        type: String,
        required: [true, "please insert status"]
    },
    assign: {
      type: String,
      required: [true, "please insert assign"]
    },
    tags: {
      type: Array,
    },
    expected_result: {
      type: String,
    },
    total_comment: {
      type: Number,
    },
    tested_date: {
      type: String,
    }
  }
)


module.exports = mongoose.model("Items", itemSchema);