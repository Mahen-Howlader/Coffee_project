function Coffeecart({ props }) {
  const { taste, supplier, photoURL, name, details, category,chef } = props;
  console.log(props);
  return (
    <div>
      <div className="card bg-gray-400 card-side w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={photoURL}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <h2 className="card-title">Chef : {chef}</h2>
          <h2 className="card-title">Name : {}</h2>
        
        </div>
      </div>
    </div>
  );
}

export default Coffeecart;
