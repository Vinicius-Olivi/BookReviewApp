import { useState, useEffect } from 'react';
// import {v4 as uuid} from "uuid";
import "./Author.css";
function Author(props) {
  
  const [book, setBook] = useState([]);  
  let ifValid=false;
  
  const fetchHandler = async() => {
    try{
    const response = await fetch(`https://openlibrary.org/search.json?author=${props.author}&limit=10&fields=key,title,author_name,ratings_average,cover_edition_key,edition_key,subject&sort=rating`);
    if(!response.ok){
      throw new Error(response.statusText);
    }
    const data = await response.json();     
    let i=0; let arr=[];
    while(i<5){
        arr.push(data.docs[i])
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
    <div className='authorContainer'>

      <div>
        {
        book.map((b)=>
        <div><h1>Book Title: {b.title}</h1>
        {/* <h2>Cover:</h2> */}
        {!b.cover_edition_key?<img src={"https://covers.openlibrary.org/b/olid/"+b.edition_key[0]+".jpg"} />:<img src={"https://covers.openlibrary.org/b/olid/"+b.cover_edition_key+".jpg"} />}     
        <h2>Author: {b.author_name}</h2>
        <h2>First Published: {b.first_publish_year}</h2>
        <h2>Rating: {Math.round(b.ratings_average*10)/10}</h2>
        <p>Genre: {b.subject.map((s,index)=>{if(index>0&&index<5)return<>{s}</>})}</p></div>)}       
      </div>    
          
    </div>
)
}

export default Author;



















