import { useState, useEffect } from 'react';
// import {v4 as uuid} from "uuid";
import "./Book.css";
function Book(props) {
  
  const [book, setBook] = useState([]); 
  let ifValid=false;

  function handleClick(data){
    props.handleAdd(data);
  }
  
  const fetchHandler = async() => {
    try{
    const response = await fetch(`https://openlibrary.org/search.json?q=${props.book}&limit=10&fields=key,title,author_name,ratings_average,cover_edition_key,edition_key,subject,first_publish_year,number_of_pages_median`);
    if(!response.ok){
      throw new Error(response.statusText);    
    }
    const data = await response.json();     
    let i=0; let arr=[];
    while(i<5){
        arr.push(data.docs[i]);
        i++;}
    setBook(arr);
    }catch(err){
    console.log(err.message);
    }
  }
  useEffect(()=>{
fetchHandler();
  }, [])

  return (    
    <div className='bookContainer'>

      <div>
        {
        book.map((b)=>
        <div><h1>Book Title: {b.title}</h1>      
        {(b.cover_edition_key||b.edition_key)&&(!b.cover_edition_key?<img src={"https://covers.openlibrary.org/b/olid/"+b.edition_key[0]+".jpg"} />:<img src={"https://covers.openlibrary.org/b/olid/"+b.cover_edition_key+".jpg"} />)}
        <button onClick={()=>handleClick([b.title, b.author_name[0], b.first_publish_year,b.number_of_pages_median])}>Add to reading List</button>
        <h2>Author: {b.author_name}</h2>
        <h2>First Published: {b.first_publish_year}</h2>
        <h2>Number of pages: {b.number_of_pages_median}</h2>
        <h2>Rating: {Math.round(b.ratings_average*10)/10}</h2>
        {b.subject&&<p>Genre: {b.subject.map((s,index)=>{if(index>0&&index<5)return<>{s}</>})}</p>}
        </div>)}       
      </div>    
          
    </div>
)
}

export default Book;



















