const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewController");

router.get("/reviews", reviewsController.getReviews);
// Route for creating a new review
router.post("/reviews", reviewsController.createReview);

// Route for updating an existing review
// router.patch("/reviews/:reviewId", reviewsController.updateReview);

// Route for deleting a review
// router.delete("/reviews/:reviewId", reviewsController.deleteReview);

module.exports = router;
