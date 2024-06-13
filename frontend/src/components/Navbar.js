import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header>
        <div>
          <Link to="/search">
            <button
              style={{
                color: "#ffb5b5",
                backgroundColor: "#132743",
                fontSize: "20px",
              }}
            >
              Go to Search and your Book List
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
