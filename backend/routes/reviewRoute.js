const express = require("express");
const { addReview, deleteReview } = require("../controllers/reviewController");

const router = express.Router();

router.post("/reviews", addReview);
router.delete("/reviews/:reviewId", deleteReview);

module.exports = router;

/* const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewController");

router.get("/reviews", reviewsController.getReviews);
router.get("/review/:id", reviewsController.getReview);
// Route for creating a new review
router.post("/review/:id", reviewsController.createReview);

// Route for updating an existing review
// router.patch("/reviews/:reviewId", reviewsController.updateReview);

// Route for deleting a review
// router.delete("/reviews/:reviewId", reviewsController.deleteReview);

module.exports = router;
 */
