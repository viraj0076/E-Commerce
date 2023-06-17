import { Link } from "react-router-dom";
import { cartImg, logoDark } from "../Assets";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo  =  useSelector((state) =>  state.bazar.userInfo);
  console.log(userInfo);
  return (
    <>
      <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
          <Link to="/">
            <div>
              <img className="md:w-21 w-28 " src={logoDark} alt="logoDark" />
            </div>
          </Link>

          <div className="flex items-center gap-7">
            {/* <ul className="flex items-center gap-7">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </ul> */}
            <Link to="/cart">
              <div className="relative">
                <img className="w-9" src={cartImg} alt="cartImg" />
                <span className="absolute w-5 top-3 left-2 text-sm flex items-center justify-center font-bold font-titleFont">
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <img
                className="w-8 h-8 rounded-full"
                src={userInfo ? userInfo?.image : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt="image2"
              />
            </Link>
            {
              userInfo && <p className="font-bold">{userInfo?.name.split(" ").join("").slice(0,7)}</p>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
