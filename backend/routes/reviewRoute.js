const express = require("express");
const { addReview, deleteReview } = require("../controllers/reviewController");

const router = express.Router();

router.post("/reviews", addReview);
router.delete("/reviews/:reviewId", deleteReview);

module.exports = router;
