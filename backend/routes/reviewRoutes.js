const express = require("express")
const router = express.Router()
const reviewsController = require("../controllers/reviewController")

router.get("/items", reviewsController.getReviews)
router.get("/item/:id", reviewsController.getReview)
router.post("/item", reviewsController.createReview)
router.patch("/items/:id", reviewsController.editReview)
router.delete("/items/:id", reviewsController.deleteReview)

module.exports = router