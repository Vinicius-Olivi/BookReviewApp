const API_URL = `http://localhost:4000`;

export const addBookToList = async (book) => {
  let obj = {
    id: book.id,
    title: book.title,
    author: book.author,
    year: book.year,
    pages: book.pages,
    review: "",
  };
  const response = await fetch(`${API_URL}/api/book/`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
};
