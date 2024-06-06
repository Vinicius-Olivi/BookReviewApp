import { useState, useEffect } from 'react';
import {v4 as uuid} from "uuid";
import "./Author.css";

function Author(props) {
  
  const [book, setBook] = useState([]);  
  const [ifValid, setValid] =useState(false);
  const [errorColor, setErrorColor] = useState("#132743");

  function handleClick(data){
    props.handleAdd(data);
  }
  
  const fetchHandler = async() => {
    try{
    const response = await fetch(`https://openlibrary.org/search.json?author=${props.author}&limit=10&fields=key,title,author_name,ratings_average,cover_edition_key,edition_key,first_publish_year,number_of_pages_median,subject&sort=rating`);
    if(!response.ok){
        throw new Error(response.statusText);
    }
  
    const data = await response.json();  
    if(data.docs.length>0){setValid(true)}else{setErrorColor("#ffb5b5")}
    
    let i=0; let arr=[];
    while(i<6){
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
    ifValid?(<div className='authorContainer'>

      <div>
        {
        book.map((b)=>
        <div><h1>Book Title: {b.title}</h1>
        {!b.cover_edition_key?<img src={"https://covers.openlibrary.org/b/olid/"+b.edition_key[0]+".jpg"} />:<img src={"https://covers.openlibrary.org/b/olid/"+b.cover_edition_key+".jpg"} />}     
        <button onClick={()=>handleClick({title: b.title, author: b.author_name[0], year: b.first_publish_year,pages: b.number_of_pages_median, id: uuid()})}>Add to reading List</button>
        <h2>Author: {b.author_name}</h2>
        <h2>First Published: {b.first_publish_year}</h2>
        <h2>Number of pages: {b.number_of_pages_median}</h2>
        <h2>Rating: {Math.round(b.ratings_average*10)/10}</h2>
        {/* {b.subject&&<p>Genre: {b.subject.map((s,index)=>{if(index>0&&index<5)return<>{s}</>})}</p>} */}
        </div>)}
      </div>    
          
    </div>):(<h2 style={{color:errorColor}}>Sorry, could not find this author. Enter a valid Author Name.</h2>)
)
}

export default Author;



















