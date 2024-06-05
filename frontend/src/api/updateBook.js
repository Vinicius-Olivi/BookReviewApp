const API_URL = `http://localhost:4000`

export const updateBook = async (obj) => {
    // let obj = {text:todo}
    console.log(99,obj)
    const response = await fetch(`${API_URL}/books/item/${obj.id}`, {        
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            review: obj.review
        })
        
    })
    const json = await response.json();
    return json;
    
}