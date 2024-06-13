const API_URL = `http://localhost:4000`;

// export const deleteBook = async (obj) => {
//   try {
//     console.log(obj.id);
//     const response = await fetch(`${API_URL}/api/book/${obj.id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error! Status: ${response.status}`);
//     }
//     // convert to json
//     const data = await response.json();
//     // return json
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("Error deleting book:", error);
//     throw error;
//   }
// };

export const deleteBook = async (obj) => {
  console.log(obj.id);
  const response = await fetch(`${API_URL}/api/book/${obj.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};
