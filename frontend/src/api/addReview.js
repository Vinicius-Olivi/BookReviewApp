const API_URL = `http://localhost:4000`;

export const addReview = async (bookId, content) => {
  const response = await fetch(`${API_URL}/api/reviews`, {
    method: "POST",
    body: JSON.stringify({ bookId, content }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
};

/* const API_URL = `http://localhost:4000`;

export const addReview = async (bookId, myReview) => {
  const response = await fetch(`${API_URL}/api/review`, {
    method: "POST",
    body: JSON.stringify({ bookId, myReview }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
};
 */
