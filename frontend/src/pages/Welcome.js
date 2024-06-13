import { useEffect, useState } from "react";
import book from "./book.jpg";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <div>
        <h1>Welcome to the Book Review App!</h1>
      </div>
      <div>
        <h2>You can:</h2>

        <ul>Search for books by book title</ul>
        <ul>Search for books by your favorite author</ul>
        <ul>
          Add your favorite books to your Reading List directly from search
          results
        </ul>
        <ul>Add books manually to your Reading List</ul>
        <ul>Add and Edit reviews for the books in your Reading List</ul>
      </div>
      <div>
        <img style={{ width: "70%" }} src={book} />
      </div>
    </div>
  );
};

export default Welcome;
