import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
const Recipi = ({ recipi, handleCart }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipi;
  return (
    <>
      <div className="main-container container mx-auto ">
        <div className="left-col">
          {/* main body  */}
          <div className="card max-w-96 h-[650px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={recipe_image} className="rounded-lg" />
            </figure>
            <div className="card-body px-12">
              <h2 className="card-title text-xl text-[#282828] font-semibold">
                {recipe_name}
              </h2>
              <p className="text-[16px] text-[#878787]">{short_description}</p>
              <hr />
              <h3>
                Ingredients:{ingredients.length}
                {ingredients.map((item, idx) => (
                  <ul
                    key={idx}
                    className="list-disc text-[#878787] text-[18px]"
                  >
                    <li>{item}</li>
                  </ul>
                ))}
              </h3>

              <hr />
              <div className="flex justify-between">
                <div className="flex justify-center items-center gap-2">
                  <CiClock2 />
                  <p className="text-xl">{preparing_time}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FaFire />
                  <p className="text-xl">{calories}</p>
                </div>
              </div>
              <div className="card-actions">
                <button onClick={()=> handleCart(recipi)} className="btn bg-green-400 text-[#150B2B] rounded-full font-medium text-[]18px">
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
          {/* main body  */}
        </div>
      </div>
    </>
  );
};

export default Recipi;
