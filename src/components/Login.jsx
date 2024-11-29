import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";

const Login = () => {

const {loginUser} = useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(res=>{
            console.log(res.user);

            // update last login time
            const lastSignInTime = res?.user?.metadata.lastSignInTime;
            const loginInfo={
                email, lastSignInTime
            }
            fetch(`http://localhost:5000/users`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)

            })
            .then(res=> res.json())
            .then(res=> console.log(res))
            .catch(err=> console.log(err))


        })
        .catch(err=>{
            console.log(err);
        })
       
    }
    








  return (
    <div className="flex flex-col justify-center items-center space-y-4 py-20">
    <h1 className="text-center text-4xl">Sign In</h1>
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Login;
