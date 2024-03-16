import { useEffect, useState } from "react";
import Recipi from "../recipi/Recipi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipies = () => {
  const [recipies, setRecipies] = useState([]);
  const [cook, setCook] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("recipi.json")
      .then((res) => res.json())
      .then((data) => setRecipies(data));
  }, []);

  const handleCook = (recipi) => {
    const isExist = cook.find((item) => item.recipe_id === recipi.recipe_id);
    if (!isExist) {
      setCook([...cook, recipi]);
      setCount(count + 1);
    } else {
      toast("Already Exist!");
    }
  };

  const handleCooking = (item) => {
    const newCook = cook.filter((cok) => cok.recipe_id != item.recipe_id);
    setCook(newCook);
    setCooking([...cooking, item]);
  };

  return (
    <>
      <div className="container mx-auto flex justify-between">
        <div className="grid grid-cols-2 gap-8">
          {recipies.map((recipi) => (
            <Recipi
              handleCook={handleCook}
              key={recipi.recipe_id}
              recipi={recipi}
            ></Recipi>
          ))}
        </div>
        <div>
          <div className="table  border p-10 mb-10">
            <div className="">
              <div className="text-center mb-3">
                <h2 className="text-5xl">Want to cook: {count}</h2>
              </div>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                {cook.map((item, idx) => (
                  <tbody key={item.recipe_id}>
                    <tr className="mb-10">
                      <th>{idx + 1}</th>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time}</td>
                      <td>{item.calories}</td>
                      <td
                        className="btn bg-green-400 rounded-full"
                        onClick={() => handleCooking(item)}
                      >
                        Preparing
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <ToastContainer />
            </div>
          </div>
          <div className="table  border p-10">
            <div className="">
              <div className="text-center mb-3">
                <h2 className="text-5xl">Currently cooking: 02</h2>
              </div>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                {cooking.map((item, idx) => (
                  <tbody className="bg-gray-200" key={item.recipe_id}>
                    <tr>
                      <th>{idx + 1}</th>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time}</td>
                      <td>{item.calories}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipies;
