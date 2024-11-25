import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard.jsx";
import { useState } from "react";

const App = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data)
  // console.log(data);
  return (
    <div className="px-12">
      <h1 className="text-6xl text-purple-600">Coffee Store</h1>
      <div className="grid grid-cols-2 gap-2 my-12">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} setCoffees={setCoffees} coffees={coffees}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default App;
