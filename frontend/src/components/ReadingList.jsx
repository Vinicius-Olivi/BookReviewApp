import React, { useState } from "react";
import { addReview } from "../api/addReview";
import { deleteReview } from "../api/deleteReview";
import TextareaAutosize from "react-textarea-autosize";

const ReadingList = ({
  title,
  author,
  year,
  pages,
  id,
  handleRemove,
  reviews: initialReviews,
}) => {
  const [newReview, setNewReview] = useState("");
  const [reviews, setReviews] = useState(initialReviews || []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const review = await addReview(id, newReview);
      setReviews((prevReviews) => [...prevReviews, review]);
      setNewReview(""); // Reset review input
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleReviewDelete = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== reviewId),
      );
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div>
      <h3>Title: {title}</h3>
      <p>Author: {author}</p>
      <p>Release Date: {year}</p>
      <p>Num of Pages: {pages}</p>
      <button
        style={{
          marginBottom: "20px",
          width: "30%",
          cursor: "pointer",
          backgroundColor: "#993E44",
          color: "white",
          padding: "4px",
          borderRadius: "8px",
        }}
        onClick={() => handleRemove(id)}
      >
        Remove the book
      </button>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "10px",
        }}
        onSubmit={handleReviewSubmit}
      >
        <TextareaAutosize
          style={{ width: "20rem" }}
          minRows={4}
          maxRows={8}
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write a review"
          required
        />
        <button
          style={{
            cursor: "pointer",
            minHeight: "2rem",
            maxHeight: "2rem",
            marginTop: "10px",
            borderRadius: "6px",
            boxShadow: "#132743",
            cursor: "pointer",
          }}
          type="submit"
        >
          Add Review
        </button>
      </form>
      <div style={{}}>
        <h4>Reviews:</h4>
        {reviews &&
          reviews.map((review) => (
            <div key={review._id}>
              <p
                style={{
                  boxSizing: "content-box",
                  padding: "20px",
                  margin: "2px",
                  border: "1px solid #132743",
                  color: "#132743",
                  textAlign: "left",
                  borderRadius: "6px",
                  boxShadow: "#132743 2px 2px ",
                }}
              >
                {review.content}
              </p>
              <button
                style={{
                  marginTop: "10px",
                  borderRadius: "6px",
                  boxShadow: "#132743",
                  cursor: "pointer",
                }}
                onClick={() => handleReviewDelete(review._id)}
              >
                Delete review
              </button>
            </div>
          ))}
      </div>
      <div>
        <span>
          <div
            style={{ fontSize: "1.5rem", maxWidth: "100%", color: "#132743" }}
          >
            <h2>_________________</h2>
          </div>
        </span>
      </div>
    </div>
  );
};

export default ReadingList;
