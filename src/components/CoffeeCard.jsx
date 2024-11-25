/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id,name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDeleteCoffee = (id) => {
    console.log(id);

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
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            if (res.deletedCount > 0) {
                const remaining = coffees.filter(coffeee=> coffeee._id !== id)
                setCoffees(remaining)
            }
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div
      className="card card-side bg-base-100 shadow-xl px-4 w-full flex justify-between py-12
    "
    >
      <figure>
        <img className=" w-32 h-32" src={photo} alt="Movie" />
      </figure>
      <div className="card-bod gap-10 flex items-center">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3 bg-purple-400">
            <button className="btn join-item">view</button>
           <Link to={`/updateCoffee/${coffee._id}`}> <button className="btn join-item">Edit</button></Link>
            <button
              className="btn join-item"
              onClick={() => handleDeleteCoffee(coffee._id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
