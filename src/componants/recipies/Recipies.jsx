import { useEffect, useState } from "react";
// import Bookmark from "../bookmark/Bookmark";
import Recipi from "../recipi/Recipi";

const Recipies = () => {
  const [recipies, setRecipies] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("recipi.json")
      .then((res) => res.json())
      .then((data) => setRecipies(data));
  }, []);

  const handleCart = (recipi) => {
    setCart([recipi]);
  };
  console.log(cart);
  return (
    <>
      <div className="container mx-auto flex justify-between">
        <div className="grid grid-cols-2 gap-8">
          {recipies.map((recipi) => (
            <Recipi
              handleCart={handleCart}
              key={recipi.recipe_id}
              recipi={recipi}
            ></Recipi>
          ))}
        </div>
        <div>
          <div className="table  border p-10 mb-10">
            <div className="">
              <div className="text-center mb-3">
                <h2 className="text-5xl">Want to cook: 01</h2>
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
                {cart.map((item, idx) => (
                  <tbody>
                    <tr>
                      <th>{idx + 1}</th>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time}</td>
                      <td>{item.calories}</td>
                      <td className="btn bg-green-400 rounded-full">
                        Preparing
                      </td>
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
