import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);

const handleDeleteUser=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
    

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(res=> {
            if (res.deletedCount > 0) {
                const remainingUsers = users.filter(user=> user._id !== id)
                setUsers(remainingUsers)
            }
          })

        }
      });
}
  return (
    <div>
      <h2>Users</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users?.map((user, index)=>  <tr key={index}>
                    <th>{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user?.createdAt? user?.createdAt : 'null'}</td>
                    <td>{user?.lastSignInTime}</td>
                    <td>
                        <button className="btn">E</button>
                        <button onClick={()=>handleDeleteUser(user?._id)} className="btn">X</button>
                    </td>
                  </tr>)
            }
           
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
