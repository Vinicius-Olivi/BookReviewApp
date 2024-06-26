import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "../App.css";
import Author from "../components/Author";
import Book from "../components/Book";
import ReadingList from "../components/ReadingList";
import { addBookToList } from "../api/addBookToList";
import { updateBook } from "../api/updateBook";
import { getBooks } from "../api/getBooks";
import { deleteBook } from "../api/deleteBook";

export default function SearchAndBookList() {
  const [bookInput, getBook] = useState("");
  const [userBook, fetchBook] = useState("");
  const [titleInput, getTitle] = useState("");
  const [userTitle, fetchTitle] = useState("");
  const [books, setBooks] = useState([]);
  const [manualEntryForm, setManualEntryForm] = useState(false);
  const [manualBook, setManualBook] = useState({
    title: "",
    author: "",
    year: "",
    pages: "",
    id: "",
  });

  useEffect(() => {
    const fetchBooks = async () => {
      let data = await getBooks();
      console.log(data.books);
      setBooks(data.books);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      let data = await getBooks();
      setBooks(data.books);
    };
    fetchBooks();
  }, [books]);

  function fetchBooks() {
    getBooks().then((data) => {
      setBooks(data.books);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchBook(bookInput);
    getBook("");
  }

  function handleTitleSubmit(event) {
    event.preventDefault();
    fetchTitle(titleInput);
    getTitle("");
  }

  function handleChange(e) {
    getBook(e.target.value);
  }

  function handleTitleChange(e) {
    getTitle(e.target.value);
  }

  function handleReset() {
    fetchBook("");
    fetchTitle("");
  }

  function handleAdd(data) {
    setBooks((prevList) => [...prevList, data]);
    const handler = async () => {
      let res = await addBookToList(data);
      console.log("Added");
    };
    handler();
  }

  function getReview(data, id) {
    const bookReview = books.map(addReview);
    function addReview(b) {
      if (b.id == id) {
        const updateBookReview = async () => {
          let obj = {
            id: id,
            review: data,
          };
          await updateBook(obj);
        };
        updateBookReview();
        return {
          ...b,
          reviews: [...b.reviews, { content: data, _id: uuid() }],
        };
      } else {
        return b;
      }
    }
    setBooks(bookReview);
  }

  function handleRemove(id) {
    const newBooks = books.filter((b) => b._id !== id);
    setBooks(newBooks);
    const removeBook = async () => {
      let obj = { id: id };
      await deleteBook(obj);
    };
    removeBook();
  }

  function handleManualEntryForm() {
    setManualEntryForm(true);
  }

  function handleManualEntry(e) {
    setManualBook((prevData) => {
      const { name, value } = e.target;
      return { ...prevData, [name]: value };
    });
  }

  function addManualBook(e) {
    e.preventDefault();
    const newManualBook = { ...manualBook, id: uuid() };
    setBooks((prevList) => [...prevList, newManualBook]);
    setManualEntryForm(false);
    const handler = async () => {
      await addBookToList(newManualBook);
      console.log("Added");
    };
    handler();
  }

  return (
    <div className="App">
      <div className="search">
        <h1>Hi, you can search for books by Author's name</h1>
        <form style={{ fontSize: "30px" }}>
          {!userBook && !userTitle && (
            <input
              style={{ fontSize: "20px" }}
              placeholder="Author"
              required
              type="text"
              onChange={handleChange}
              value={bookInput}
            />
          )}
          {!userBook && !userTitle && (
            <input
              style={{ fontSize: "20px" }}
              className="button"
              onClick={handleSubmit}
              type="submit"
            />
          )}
        </form>

        <h1>Or you can search for books by Book's title</h1>
        <form style={{ fontSize: "30px" }}>
          {!userTitle && !userBook && (
            <input
              style={{ fontSize: "20px" }}
              placeholder="Title"
              required
              type="text"
              onChange={handleTitleChange}
              value={titleInput}
            />
          )}
          {!userTitle && !userBook && (
            <input
              style={{ fontSize: "20px" }}
              className="button"
              onClick={handleTitleSubmit}
              type="submit"
            />
          )}
          {(userBook || userTitle) && (
            <button style={{ fontSize: "20px" }} onClick={handleReset}>
              Search Another Book
            </button>
          )}
        </form>

        {userBook && <Author author={userBook} handleAdd={handleAdd} />}
        {userTitle && <Book book={userTitle} handleAdd={handleAdd} />}
      </div>
      <div className="readingList" style={{ padding: "1.5rem" }}>
        <h1>My Reading List</h1>
        <h2>__________________________________</h2>

        <button onClick={handleManualEntryForm}>
          Add a book to the list manually
        </button>
        {manualEntryForm && (
          <form>
            <input
              type="text"
              placeholder="title"
              required
              name="title"
              onChange={handleManualEntry}
            />
            <input
              type="text"
              placeholder="author"
              required
              name="author"
              onChange={handleManualEntry}
            />
            <input
              type="text"
              placeholder="year"
              name="year"
              onChange={handleManualEntry}
            />
            <input
              type="text"
              placeholder="number of pages"
              name="pages"
              onChange={handleManualEntry}
            />
            {manualBook.title && manualBook.author && (
              <input type="submit" onClick={addManualBook} />
            )}
          </form>
        )}
        <h2>__________________________________</h2>
        {books.map((b) => (
          <ReadingList
            key={b.id}
            title={b.title}
            author={b.author}
            year={b.year}
            pages={b.pages}
            id={b._id}
            getReview={getReview}
            handleRemove={handleRemove}
            reviews={b.reviews}
          />
        ))}
      </div>
    </div>
  );
}
