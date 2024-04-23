import { Link, useLoaderData } from "react-router-dom";
import Coffeecart from "./Component/Coffeecart";
import { useState } from "react";
// import "./App.css";

function App() {

  const loaderData = useLoaderData();
  const [data,setData] = useState(loaderData)
  console.log(data);
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
        <div className="grid grid-cols-2 gap-5">{data.map((coffee,index) => {
         return   <Coffeecart key={index} props={coffee} loadedata={data} setdata={setData}></Coffeecart>
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
