const Item = require("../models/Item")

exports.getItem = async (req, res, next) => {
    try{
        const item = await Item.find({type: req.query.itemType});

        res.status(200).json({
            success: true,
            body: item
        })
    }
    catch (err){
        next(err)
    }
    
}

exports.updateItem = (req, res, next) => {
    res.status(200).json({
        success: 'true',
        body: "end item-n info update hiih heseg orj irne"
    })
}

exports.createItem = async (req, res, next) => {
    try{
        console.log(Item.find().sort({id:-1}).limit(1).tree.id)
        const item = await Item.create(req.body);

        res.status(200).json({
            success: true,
            body: item
        })
    }
    catch (err){
        next(err)
    }
    
    
}

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