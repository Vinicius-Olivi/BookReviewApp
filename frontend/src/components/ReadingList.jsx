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
        {/*         <input
          type="text"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write a review"
          required
        /> */}
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

/* import React, { useState } from "react";
import { addReview } from "../api/addReview";

const ReadingList = ({
  title,
  author,
  year,
  pages,
  id,
  handleRemove,
  reviews,
}) => {
  const [review, setReview] = useState("");

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const newReview = await addReview(id, review);
    console.log(newReview);
    // Update the book's reviews state here if needed
  };

  return (
    <div>
      <h3>Title: {title}</h3>
      <p>Author: {author}</p>
      <p>Released year: {year}</p>
      <p>Num of Pages: {pages}</p>
      <form onSubmit={handleReviewSubmit}>
        <input
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write a review"
          required
        />
        <button type="submit">Add Review</button>
      </form>
      <button onClick={() => handleRemove(id)}>Remove</button>
      <div>
        <h4>Reviews:</h4>
        {reviews.map((reviewId) => (
          <p key={reviewId}>{reviewId}</p> // You may need to fetch review details here
        ))}
      </div>
    </div>
  );
};

export default ReadingList; */

/* import "./ReadingList.css";
import { useState, useEffect } from "react";
function ReadingList(props) {
  const [inputBox, setInputBox] = useState(false);
  const [review, getReview] = useState("");
  const [submittedReview, setReview] = useState("");
  function handleChange(e) {
    getReview(e.target.value);
  }
  function handleSubmit() {
    setReview(review);
    setInputBox(false);
    props.getReview(review, props.id);
  }
  function handleDelete() {
    setReview("");
  }
  function showInputBox() {
    setInputBox(true);
  }

  function handleRemove() {
    props.handleRemove(props.id);
  }
  return (
    <div className="ReadingList">
      <p>
        Title: {props.title}
        <button onClick={handleRemove}>Remove from List</button>
      </p>
      <p>Author: {props.author}</p>
      <p>First published: {props.year}</p>
      <p>Pages:{props.pages}</p>
      {props.myReview && <p>My Review:{props.myReview}</p>}

      <button onClick={showInputBox}>Add/Edit Review</button>
      {inputBox && (
        <div>
          <textarea
            type="text"
            style={{ width: "300px", height: "100px" }}
            onChange={handleChange}
            value={review}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {submittedReview && (
        <div>
          <p className="review">My Review: {submittedReview}</p>
          <button onClick={handleDelete}>Delete Review</button>
        </div>
      )}
      <h2>____________________________________</h2>
    </div>
  );
}

export default ReadingList;
 */
