const API_URL = `http://localhost:4000`;

export const deleteReview = async (reviewId) => {
  const response = await fetch(`${API_URL}/api/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const message = `An error has occurred: ${response.statusText}`;
    throw new Error(message);
  }

  const json = await response.json();
  return json;
};
