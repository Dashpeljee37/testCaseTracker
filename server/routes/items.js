const express = require("express");
const {
  getItem,
  createItem,
  updateItem,
  addProgress,
  deleteItem
} = require("../controller/item");

const router = express.Router();

router
  .route("/")
  .get(getItem)
  .post(createItem)
  .put(updateItem)
  .delete(deleteItem)

router.route("/addProgress").post(addProgress)

module.exports = router;
