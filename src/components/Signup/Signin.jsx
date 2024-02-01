import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setUser, setProfile } from "./../../features/userSlice";

import SigninForm from "./SigninForm";
import LoginButton from "../Utils/Buttons/LoginButton";
import GoogleIcon from "./../../assets/img/icons/GoogleIcon.svg";
import AppleIcon from "./../../assets/img/icons/AppleIcon.svg";

function Signin() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: (res) => dispatch(setUser(res)),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          dispatch(setProfile(res.data));
           navigate('/user/upload');
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className=" font-normal mt-16 flex flex-col w-full sm:w-1/2 sm:my-auto mx-atuo">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="text-2xl self-baseline sm:self-center sm:text-4xl font-bold montserrat">Sign In</h1>
        <p className="font-normal">Sign in to your account</p>
        <div className="w-full mb-6 flex justify-between">
          <LoginButton login={login}>
            <img src={GoogleIcon} /> <span>Login with Google</span>
          </LoginButton>
          <LoginButton login={login}>
          <img src={AppleIcon} /> <span>Login with Apple</span>
          </LoginButton>
        </div>
        <SigninForm />
        <p>
          Don't have an account?{" "}
          <Link className=" text-blue-600 self-baseline hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
