import { Link, useLoaderData } from "react-router-dom";
import Coffeecart from "./Component/Coffeecart";
// import "./App.css";

function App() {
  const loader = useLoaderData();
  console.log(loader);
  return (
    <>
      <div className="container mx-auto">
        <div>
          <p>--- Sip & Savor --</p>
          <h2>Our Popular Products</h2>
          <Link className="btn" to="/addcoffee">
            Add Coffee
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5">{loader.map((coffee,index) => {
         return   <Coffeecart key={index} props={coffee}></Coffeecart>
        })}</div>
      </div>
      <div className="flex gap-x-10">
        <Link className="btn" to="/updatecoffee">
          Update Coffee
        </Link>
      </div>
    </>
  );
}

export default App;
