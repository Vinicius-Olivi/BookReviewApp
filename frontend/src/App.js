import SearchAndBookList from "./pages/SearchAndBookList";
import Welcome from "./pages/Welcome";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Welcome />}
          />
          <Route
            path='/search'
            element={<SearchAndBookList />}
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App