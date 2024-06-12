import "./ReadingList.css";
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
