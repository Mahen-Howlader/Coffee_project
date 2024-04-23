import Swal from "sweetalert2";
function Addcoffee() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photoURL = e.target.photoURL.value;
    const userInfo = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((user) => user.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
        console.log(data);
      });
    // You can handle form submission here, e.g., send data to server
  };
  return (
    <div className="bg-gray-300 min-h-[100vh] pt-10">
      <div className="mx-auto w-6/12 text-center">
        <h1 className="text-3xl">Add New Coffee</h1>
        <p className="my-3">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-6/12 mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xl" htmlFor="">
              Name
            </label>
            <input
              type="text"
              className="form-input border rounded-sm border-gray-900 px-5 p-2 w-full"
              name="name"
              placeholder="Enter coffee name"
            />
          </div>
          <div>
            <label className="text-xl" htmlFor="">
              Chef
            </label>
            <input
              type="text"
              className="form-input border rounded-sm border-gray-900 px-5 p-2 w-full"
              name="chef"
              placeholder="Enter coffee chef"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-xl" htmlFor="">
              Supplier
            </label>
            <input
              type="text"
              className="form-input border rounded-sm border-gray-900 px-5 p-2 w-full"
              name="supplier"
              placeholder="Enter coffee supplier"
            />
          </div>
          <div>
            <label className="text-xl" htmlFor="">
              Taste
            </label>
            <input
              type="text"
              className="form-input border rounded-sm border-gray-900 px-5 p-2 w-full"
              name="taste"
              placeholder="Enter coffee taste"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-xl" htmlFor="">
              Category
            </label>
            <input
              type="text"
              className="form-input border rounded-sm border-gray-900 px-5 p-2 w-full"
              name="category"
              placeholder="Enter coffee category"
            />
          </div>
          <div>
            <label className="text-xl" htmlFor="">
              Details
            </label>
            <input
              type="text"
              className="form-input border rounded-sm border-gray-900 px-5 p-2 w-full"
              name="details"
              placeholder="Enter coffee details"
            />
          </div>
        </div>

        <div className=" mt-3 ">
          <label className="text-xl" htmlFor="">
            Photo
          </label>
          <input
            type="text"
            className="form-input border rounded-sm border-gray-900 px-5 p-2 w-full"
            name="photoURL"
            placeholder="Enter photo URL"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Addcoffee;
