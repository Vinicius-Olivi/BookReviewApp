const API_URL = `http://localhost:4000`;

export const getBooks = async () => {
  const response = await fetch(`${API_URL}/api/books`, {
    // method type?
    method: "GET",
    // content type?
    headers: {
      "Content-Type": "application/json",
    },
  });
  // convert to json
  const data = await response.json();
  // return json
  return data;
};
