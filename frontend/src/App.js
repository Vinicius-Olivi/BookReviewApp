import React, { useState, useEffect } from "react";
import {v4 as uuid} from "uuid";
import "./App.css";
import Author from "./components/Author";
import Book from "./components/Book";
import ReadingList from "./components/ReadingList";


export default function App() {
  
  const [bookInput, getBook]=useState("");
  const [userBook, fetchBook]=useState("");

  const [titleInput, getTitle]=useState("");
  const [userTitle, fetchTitle]=useState("");

  const [book, addBook]= useState([]);
  const [review, setReview] = useState("")

  const [manualEntryForm, setManualEntryForm] = useState(false);
  const [manualBook, setManualBook] = useState({
    title:"",
    author:"",
    year:"",
    pages:"",
    id:""
  })
 

    function handleSubmit(event){
      
      event.preventDefault();
      fetchBook(bookInput);
      getBook("");
    }

    function handleTitleSubmit(event){
      
      event.preventDefault();
      fetchTitle(titleInput);
      getTitle("");
    }

    function handleChange(e){
      getBook(e.target.value)
    }
    function handleTitleChange(e){      
      getTitle(e.target.value)
    }
    function handleReset(){
      fetchBook("");
      fetchTitle("");
    }

    function handleAdd(data){
      addBook((prevList)=> [...prevList, data]);
    }

    function getReview(data){
      setReview(data);
    }

    function handleRemove(id){      
      const bookNew = book.filter(checkId);
      function checkId(b){
          return b.id!==id;
      }
      addBook(bookNew)
    }

    function handleManualEntryForm(){
      setManualEntryForm(true)
    }

    function handleManualEntry(e){
      setManualBook((prevData)=>{
        const { name, value } = e.target;
        return{...prevData, [name]:value}        
      })
    }

    function addManualBook(e){
      e.preventDefault();
      setManualBook((prevData)=>{        
        return{...prevData, id:uuid()}        
      })
      addBook((prevList)=> [...prevList, manualBook]);
      setManualEntryForm(false)
    }

  
  return (
    <div className="App">     
    <div className="search"> 
      <h1>Hi, you can search for books by Author's name</h1>
      <form style={{fontSize:"30px"}}>
        {!userBook&&!userTitle&&<input style={{fontSize:"20px"}} placeholder = "Author" required type="text" onChange={handleChange} value={bookInput}></input>}
        {!userBook&&!userTitle&&<input style={{fontSize:"20px"}} className="button" onClick={handleSubmit} type="submit" />}
        
      </form>        

      <h1>Or you can search for books by Book's title</h1>
      <form style={{fontSize:"30px"}}>
        {!userTitle&&!userBook&&<input style={{fontSize:"20px"}} placeholder = "Title"required type="text" onChange={handleTitleChange} value={titleInput}></input>}
        {!userTitle&&!userBook&&<input style={{fontSize:"20px"}} className="button" onClick={handleTitleSubmit} type="submit" />}
        {(userBook||userTitle)&&<button style={{fontSize:"20px"}} onClick={handleReset}>Search Another Book</button>}
     
      </form>

      {userBook&&<Author author={userBook} handleAdd={handleAdd}/>}
      {userTitle&&<Book book={userTitle} handleAdd={handleAdd}/>}
      </div>
      <div className="readingList">
      <h1>My Reading List</h1>
        <h2>____________________________________</h2>
       
        <button onClick={handleManualEntryForm}>Add a book to the list manually</button>
        {manualEntryForm&&<form >
          <input type="text" placeholder="title" required name="title" onChange={handleManualEntry}/>
          <input type="text" placeholder="author" required name="author" onChange={handleManualEntry}/>
          <input type="text" placeholder="year" name="year" onChange={handleManualEntry}/>
          <input type="text" placeholder="number of pages" name="pages" onChange={handleManualEntry}/>
          {manualBook.title&&manualBook.author&&<input type="submit" onClick={addManualBook} />}
          </form>}
          <h2>____________________________________</h2>
        {book.map((b)=><ReadingList key={b.id} title={b.title} author={b.author} year ={b.year} pages={b.pages} id={b.id} getReview={getReview} handleRemove={handleRemove}/>)}
        
      </div>       
    </div>
  );
}

