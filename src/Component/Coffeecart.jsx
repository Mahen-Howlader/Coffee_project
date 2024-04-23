import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Coffeecart({ props,loadedata,setdata }) {
  const { taste, supplier, photoURL, name, details, category, chef, _id } = props;

  function handelDelete(_id) {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((coffee) => coffee.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const filter = loadedata.filter(val => val._id !== _id)
              setdata(filter)
            }
          });
      }
    });
  }
  return (
    <div>
      <div className="card bg-gray-400 card-side w-full bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <h2 className="card-title">Chef : {chef}</h2>
          <h2 className="card-title">Name : {supplier}</h2>
        </div>
        <div className="flex flex-col justify-center mr-5 gap-y-3">
          <button className="btn">View</button>
          <button className="btn bg-green-700 hover:bg-green-600 text-white">
            <Link to={`/updatecoffee/${_id}`}>Edit</Link>
          </button>
          <button
            onClick={() => handelDelete(_id)}
            className="btn bg-red-700 hover:bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coffeecart;
