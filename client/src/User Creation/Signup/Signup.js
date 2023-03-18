import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onTouched",
  });

  const { createUseremail, updateuserInfo, userInfo, SetUserInfo } =
    useContext(AuthContext);

  const [passwordEye, setPasswordEye] = useState(false);
  const [signupError, setsignupError] = useState("");
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const password = watch("password");
  const imageHostKey = process.env.REACT_APP_imgbb_KEY;
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(
        `https://laptop-hut-server.vercel.app/user/1925ashraf@gmail.com`
      ).then((res) => res.json()),
  });

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  // function for handling email password signup
  const handleSignup = (data) => {
    setsignupError("");

    const image = data.photo[0];

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData);

          // google sign up using password and email

          createUseremail(data.email, data.password)
            .then((result) => {
              const user = result.user;

              handleupdateProfile(data.name, imgData.data.url);
              saveUser(
                data.name,
                data.email,
                imgData.data.url,
                data.role,
                false
              );
              toast("User Created Succesfully");

              console.log(user);
            })
            .catch((error) => {
              setsignupError(error);
              toast.error("what a msitak");
              console.log(error);
            });
        }
      });

    // function for updating user information
    const handleupdateProfile = (name, photourl) => {
      console.log(photourl);
      const profile = {
        displayName: name,
        photoURL: photourl,
      };
      console.log("find in", profile.displayName);
      updateuserInfo(profile)
        .then(() => {
          console.log("updated");
        })
        .catch((error) => {
          console.log("update error", error);
        });
    };
  };

  // function for inserting user in database

  const saveUser = (name, email, photoURL, role, isverified) => {
    const newUser = {
      name,
      email,
      photoURL,
      role,
      isverified,
    };
    console.log("from save post", newUser);
    fetch(`https://laptop-hut-server.vercel.app/user?email=${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getUserToken(email);
      });
  };

  const getUserToken = (email) => {
    fetch(`https://laptop-hut-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);

          toast.success("Sign Up Successful!");

          navigate("/");
        }
      });
  };

  return (
    <div className=" flex justify-center items-center container mx-auto  ">
      <div className="w-96  border-2 p-5 shadow-xl rounded-2xl">
        <form onSubmit={handleSubmit(handleSignup)}>
          <h2 className="text-4xl font-bold text-center">Sign Up</h2>
          {/* name */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-600 mt-3">{errors.name?.message}</p>
            )}
          </div>
          {/* email */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 mt-3">{errors.email?.message}</p>
            )}
          </div>

          {/* password  */}

          <React.Fragment>
            <section>
              <div className="form-control w-full max-w-xs">
                <div>
                  <div>
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
                            value:
                              /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                            message:
                              "Password should include at least one uppercase, one numeric value and one special character,one lowercase",
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

                      {/* eye section */}
                      <div className="text-2xl absolute top-1 right-5">
                        {passwordEye === false ? (
                          <AiFillEyeInvisible onClick={handlePasswordClick} />
                        ) : (
                          <AiFillEye onClick={handlePasswordClick} />
                        )}
                      </div>
                    </div>

                    {/* confirm password section */}
                    <div className="mt-10 relative">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
                      </label>
                      <input
                        type={
                          confirmPasswordEye === false ? "password" : "text"
                        }
                        placeholder="Confirm Password"
                        onPaste={(e) => {
                          e.preventDefault();
                          return false;
                        }}
                        className={`w-full h-14 rounded-lg input input-bordered  max-w-xs ${
                          errors.confirmPassword &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        } `}
                        {...register("confirmPassword", {
                          required: "confirm password is required",
                          validate: (value) =>
                            value === password || "The passwords do not match",
                        })}
                      />
                      {errors.confirmPassword && (
                        <span className="text-sm text-red-500">
                          {errors.confirmPassword.message}
                        </span>
                      )}

                      {/* eye section */}
                      <div className="text-2xl absolute top-1 right-5">
                        {passwordEye === false ? (
                          <AiFillEyeInvisible
                            onClick={handleConfirmPasswordClick}
                          />
                        ) : (
                          <AiFillEye onClick={handleConfirmPasswordClick} />
                        )}
                      </div>
                    </div>

                    {/* image upload  */}

                    <div className="photo mt-5 ">
                      <img
                        src={
                          watch("photo")
                            ? URL.createObjectURL(watch("photo")[0])
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                        sx={{ width: "200px", height: "200px" }}
                      />
                      <label htmlFor="contained-button-file">
                        <input
                          className="file-input file-input-bordered w-full max-w-xs mt-4"
                          accept="image/*"
                          id="contained-button-file"
                          type="file"
                          onChange={(e) => setValue("photo", e.target.files)}
                          multiple
                        />
                      </label>
                    </div>

                    {/* user type  */}
                    <label className="label">
                      <span className="label-text">Select The User Type</span>
                    </label>

                    <select
                      className="select select-bordered w-full max-w-xs"
                      {...register("role")}
                    >
                      <option value="User">User</option>
                      <option value="Seller">Seller</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
          </React.Fragment>

          <input
            className="btn btn-primary w-full mt-10 "
            type="submit"
            value="Sign UP"
            onClick={handleSubmit(handleSignup)}
          />
        </form>
        <p className="mt-2">
          Already Have an Account ?
          <Link className="text-primary font-bold" to="/login">
            {" "}
            Login!
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Signup;
