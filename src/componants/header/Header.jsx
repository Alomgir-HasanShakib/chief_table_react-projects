import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <>
      <nav className="mb-14">
        <div className="container mx-auto">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Recipes</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </div>
              <a className=" text-3xl font-bold ">FoodAppy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a className="">Search</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end ">
              <label className="input hidden lg:flex items-center gap-2 rounded-full text-xl bg-gray-200">
                <CiSearch />
                <input type="text" className="grow " placeholder="Search" />
              </label>
              <a className="bg-green-500 p-4 rounded-full ml-5 ">
                <FaRegUserCircle />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero-section container mx-auto mb-24 px-3">
        <div
          className="hero rounded-lg lg:py-32 lg:px-52"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/NM6TWg5X/Rectangle-1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="mt-16">
              <h1 className="mb-5 text-2xl md:text-4xl lg:text-[52px] text-white font-bold lg:leading-[2]">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="mb-5 text-xs lg:text-xl leading-[2]">
                Types of cooking also depend on the skill levels and training of
                the cooks. Cooking is done both by people in their own dwellings
                and by professional cooks and chefs in restaurants and other
                food establishments.
              </p>
              <div className="flex gap-2 justify-center mb-16">
                <button className="btn rounded-full border-none bg-[#0BE58A] text-black px-8">
                  Explore Now
                </button>
                <button className="btn bg-transparent border-white rounded-full text-white px-8">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
