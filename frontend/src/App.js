
import React, { useState, useEffect } from "react";

import "./App.css";
import Author from "./components/Author";
import Book from "./components/Book";
import ReadingList from "./components/ReadingList";


export default function App() {
  
  const [bookInput, getBook]=useState("");
  const [userBook, fetchBook]=useState("");

  const [titleInput, getTitle]=useState("");
  const [userTitle, fetchTitle]=useState("");

  const [book, addBook]= useState([])
 

    function handleSubmit(event){
      
      event.preventDefault();
      console.log(bookInput);
      fetchBook(bookInput);
      console.log(userBook);
      getBook("");
    }

    function handleTitleSubmit(event){
      
      event.preventDefault();
      console.log(titleInput);
      fetchTitle(titleInput);
      console.log(userTitle);
      getTitle("");
    }

    function handleChange(e){
      
      getBook(e.target.value)
      console.log(bookInput)

    }
    function handleTitleChange(e){
      
      getTitle(e.target.value)
      console.log(titleInput)

    }
    function handleReset(){
      fetchBook("");
      fetchTitle("");
    }

    function handleAdd(data){
console.log(data);
addBook(data);
    }

  
  return (
    <div className="App">     
    <div> 
      <h1>Hi, you can search for books by Author's name</h1>
      <form style={{fontSize:"30px"}}>
        {!userBook&&!userTitle&&<input style={{fontSize:"20px"}} placeholder = "Author" required type="text" onChange={handleChange} value={bookInput}></input>}
        {!userBook&&!userTitle&&<input style={{fontSize:"20px"}} className="button" onClick={handleSubmit} type="submit" />}
        {/* {(userBook||userTitle)&&<button style={{fontSize:"20px"}} onClick={handleReset}>Search Another Book</button>} */}
      </form>        

      <h1>Or you can search for books by Book's title</h1>
      <form style={{fontSize:"30px"}}>
        {!userTitle&&!userBook&&<input style={{fontSize:"20px"}} placeholder = "Title"required type="text" onChange={handleTitleChange} value={titleInput}></input>}
        {!userTitle&&!userBook&&<input style={{fontSize:"20px"}} className="button" onClick={handleTitleSubmit} type="submit" />}
        {(userBook||userTitle)&&<button style={{fontSize:"20px"}} onClick={handleReset}>Search Another Book</button>}
        {/* {userTitle&&<button style={{fontSize:"20px"}} onClick={handleReset}>Search Another Book</button>} */}
      </form>

      {userBook&&<Author author={userBook} handleAdd={handleAdd}/>}
      {userTitle&&<Book book={userTitle} handleAdd={handleAdd}/>}
      </div>
      <div className="readingList">
        <ReadingList {...book}/>
      </div>
  
      
    </div>
  );
}

