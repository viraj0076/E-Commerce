import { ToastContainer, toast } from "react-toastify";
import googleLogo from "../Assets/googleLogo.png";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../ReduxStore/bazarSlice";
import {useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const auth =  getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.bazar.userInfo);






  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };




  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success("Logout Successfull");
        dispatch(removeUser())
      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <div className="w-full flex flex-col items-center justify-center flex-wrap gap-10 py-20">
      <div className="w-full flex items-center justify-center flex-wrap gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex flex-wrap items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
        >
          <img className="w-8" src={googleLogo} alt="googleLogo" />
          <span className="text-sm text-gray-900"> Sign in with Google</span>
        </div>
        {userInfo && (
          <>
          <p className="font-bold">{userInfo?.email}</p>
          <button
            onClick={handleSignOut}
            className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
            >
            Sign Out
          </button>
            </>
        )}
        </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
