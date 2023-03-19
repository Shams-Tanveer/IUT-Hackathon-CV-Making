import React, { useContext, useState } from "react";

import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

const SocialLogin = () => {
  const { signIn, userInfo, SetUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const { signingoogle, signingitpop } = useContext(AuthContext);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [errors, setError] = useState("");

  const handlegooglesignin = () => {
    signingoogle()
      .then((result) => {
        const user = result.user;
        console.log("from google", user);

        const newcurrentUser = {
          email: user.email,
        };
        console.log(newcurrentUser);

        saveUser(user.displayName, user.email, user.photoURL, "User", false);

        setError("");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setError(error.message);
        toast.error({ errors });
      });
  };

  const getUserToken = (email) => {
    fetch(`https://iut-hackathon-cv-making-woad.vercel.app/user/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);

          toast.success("Login Successful");

          navigate(from, { replace: true });
        }
      });
  };

  const saveUser = (name, email, imageUrl) => {
    const newUser = {
      name,
      
      imageUrl,
      email,
     
    };
    console.log("from save post", newUser);
    fetch(`https://iut-hackathon-cv-making-woad.vercel.app/user/register/social`, {
      method: "POST",
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

  return (
    <button onClick={handlegooglesignin} className="btn btn-outline w-full">
      {" "}
      <FcGoogle className="me-2"></FcGoogle>Continue With Google
    </button>
  );
};

export default SocialLogin;
