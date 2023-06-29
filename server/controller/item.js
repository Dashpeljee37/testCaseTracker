const Item = require("../models/Item")
const MyError = require("../utils/myError")
const asyncHandler = require("../middleware/asyncHandler")

exports.getItem = asyncHandler(async (req, res, next) => {
    const item = await Item.find({type: req.query.itemType});
    if (!item){
        throw new MyError("Ийм item байхгүй байна.", 400)
    }

    res.status(200).json({
        success: true,
        body: item
    })
});

exports.updateItem = asyncHandler((req, res, next) => {
    res.status(200).json({
        success: 'true',
        body: "end item-n info update hiih heseg orj irne"
    })
})

exports.createItem = asyncHandler(async (req, res, next) => {
    // const item = Item.find().sort({id:-1}).limit(1);
    // console.log(item)
    const item = await Item.create(req.body);

    res.status(200).json({
        success: true,
        body: item
    });
});

exports.deleteItem = (req, res, next) => {
    res.status(200).json({
        success: 'true',
        body: "end item-n delete hiih heseg orj irne"
      })
}

exports.addProgress = (req, res, next) => {
    res.status(200).json({
        success: 'true',
        body: "end item-d comment nemeh heseg orj irne"
      })
}