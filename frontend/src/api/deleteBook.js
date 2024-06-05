const API_URL = `http://localhost:4000`

export const deleteBook = async (obj) => {
    
    console.log(obj.id)
    const response = await fetch(`${API_URL}/books/item/${obj.id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
    // convert to json
   const data = await response.json();
    // return json
    console.log(data)
    return data;
}

