const API_URL = `http://localhost:4000`;

export const getBook = async (id) => {
  const response = await fetch(`${API_URL}/api/book/${id}`, {
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
