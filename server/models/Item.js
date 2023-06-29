const mongoose = require("mongoose")
const { transliterate, slugify } = require('transliteration');

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
    slug: String,
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
    createdAt: {
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
    expectedResult: {
      type: String,
      maxlength: [500, 'item description is more than 500!']
    },
    totalComment: Number,
    testedDate: Date,
    parentId: Number,
    versionId: String,
  }
)

itemSchema.pre("save", function (next){
  this.slug = slugify(this.name)
  next()
})


module.exports = mongoose.model("Items", itemSchema);