exports.getItem = (req, res, next) => {
    res.status(200).json({
        success: 'true',
        body: "end item-n info awah heseg orj irne"
      })
}

exports.updateItem = (req, res, next) => {
    res.status(200).json({
        success: 'true',
        body: "end item-n info update hiih heseg orj irne"
    })
}

exports.createItem = (req, res, next) => {
    res.status(200).json({
        success: 'true',
        body: "end item-n create hiih heseg orj irne"
      })
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