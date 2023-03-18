import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn, userInfo, SetUserInfo } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [loginError, setloginError] = useState("");

  const handleLogin = (data) => {
    setloginError("");

    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        getUserToken(data.email);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setloginError(error.message);
      });
  };

  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  // password=Aa1!sd
  //email :test@gmail.com

  const getUserToken = (email) => {
    fetch(`https://laptop-hut-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);

          toast.success("Login Successful");

          navigate("/");
        }
      });
  };

  return (
    <div className=" h-[500px] flex justify-center items-center container mx-auto  ">
      <div className="w-96  border-2 p-5 shadow-xl rounded-2xl">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h2 className="text-4xl font-bold text-center">Login</h2>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 mt-3">{errors.email?.message}</p>
            )}
          </div>

          <div className="mt-10 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={passwordEye === false ? "password" : "text"}
              placeholder="Password"
              className={`w-full h-14 rounded-lg input input-bordered  max-w-xs ${
                errors.password &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              } `}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  message:
                    "Password should include at least one uppercase, one numeric value and one special character",
                },
                minLength: {
                  value: 6,
                  message: "Minimum Required length is 6",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum Required length is 20",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
            <label className="label">
              <span className="label-text">Forget Password ?</span>
            </label>

            {/* eye section */}
            <div className="text-2xl absolute top-1 right-5">
              {passwordEye === false ? (
                <AiFillEyeInvisible onClick={handlePasswordClick} />
              ) : (
                <AiFillEye onClick={handlePasswordClick} />
              )}
            </div>
          </div>

          <input
            className="btn btn-primary w-full "
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-2">
          New to Laptop-Hut ?
          <Link className="text-primary font-bold" to="/signup">
            {" "}
            Create New Account!
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
