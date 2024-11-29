/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";

const Register = () => {
const {registerUser} = useContext(AuthContext)



const handleSubmit=(e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    registerUser(email, password)
    .then(res=>{
        console.log(res.user);
        const createdAt = res?.user?.metadata?.creationTime;
        const newUser = {name, email, createdAt}

        // save new user info to the db
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res=> res.json())
        .then(res=> {
            if (res.insertedId) {
                alert('user created')
            }
        })
    })
    .catch(err=>{
        console.log(err);
    })
}






  return (
   <div className="flex flex-col justify-center items-center ">
    <h1 className="text-center text-4xl">Sign Up</h1>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
          
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
            name="name"
          
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
          
          />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Register;
