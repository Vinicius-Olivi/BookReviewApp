function ReadingList(props){
    return(
        <div>
        <h1>My Reading List</h1>
        <h2>____________________________________</h2>
        <h2>____________________________________</h2>
        <h3>{props[0]}</h3>
        <h3>{props[1]}</h3>
        <h3>{props[2]}</h3>
        <h3>{props[3]}</h3>
        
        </div>
    )
}

export default ReadingList;