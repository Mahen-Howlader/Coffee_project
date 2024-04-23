import { Link } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <>
    <div className="flex gap-x-10">
      <Link className="btn" to="/addcoffee">Add Coffee</Link>
      <Link className="btn"  to="/updatecoffee">Update Coffee</Link>
    </div>
    </>
  );
}

export default App;
