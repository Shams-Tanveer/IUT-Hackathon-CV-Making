import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./UpdateProfile.css";
// import sideimg from "../../Resources/Images/Backgrounds/signupbg.webp"
// import SocialLogin from "../SocialLogin/SocialLogin";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
  // Educational Qualification

  const [formFields, setFormFields] = useState([
    { NameofExam: "", Institution: "", YearOfPassing: "", cgpaorgrade: "" },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      NameofExam: "",
      Institution: "",
      YearOfPassing: "",
      cgpaorgrade: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  // Educational Qualification

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    navigate("/home");
  };
  const [signupError, setsignupError] = useState("");
  const imageHostKey = process.env.REACT_APP_imgbb_KEY;
  const { createUseremail, updateuserInfo, userInfo, SetUserInfo } =
    useContext(AuthContext);

  const gotoLogin = () => {
    console.log("login");
    navigate("/login");
  };
  const gotoRestPassword = () => {};
  const password = watch("password");

  const handleSignup = (data) => {
    setsignupError("");

    const image = data.photo[0];

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
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
              console.log(user);

              handleupdateProfile(data.name, imgData.data.url);
              // saveUser(
              //   data.name,
              //   data.email,
              //   imgData.data.url,
              //   data.role,
              //   false
              // );
              toast.success("User Created Succesfully");

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

  // // function for inserting user in database

  // const saveUser = (name, email, photoURL, role, isverified) => {
  //   const newUser = {
  //     name,
  //     email,
  //     photoURL,
  //     role,
  //     isverified,
  //   };
  //   console.log("from save post", newUser);
  //   fetch(`https://laptop-hut-server.vercel.app/user?email=${email}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newUser),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       getUserToken(email);
  //     });
  // };

  // const getUserToken = (email) => {
  //   fetch(`https://laptop-hut-server.vercel.app/jwt?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.accessToken) {
  //         localStorage.setItem("accessToken", data.accessToken);

  //         toast.success("Sign Up Successful!");

  //         navigate("/");
  //       }
  //     });
  // };

  return (
    <div className="flex">
      <div className=" basis-1/2 mx-auto">
        <h1 className="font-bold">Basic Informations</h1>

        <div className=" w-80 mx-auto mt-10 ">
          <div className="photo mt-5 mb-6 ">
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

          <form onSubmit={handleSubmit(handleSignup)}>
            {/* name  */}
            <div className="form-control ">
              <label>name</label>
              <input
                className=" w-full input  input-bordered "
                type="text"
                name="name"
                placeholder="Enter your name"
          
                {...register("name", {
                  required: "name is required.",
                  pattern: {
                    value: /^([a-zA-Z ]){2,30}$/,
                    message: "name should not contain special characters.",
                  },
                })}
              />
              {errors.name && <p className="errorMsg">{errors.name.message}</p>}
            </div>

            {/* email  */}

            <div className="form-control ">
              <label>Email</label>
              <input
                className=" w-full input  input-bordered "
                type="text"
                name="email"
                placeholder="Enter your Email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label>LinkedIn Profile Link</label>
              <input
                className=" w-full input  input-bordered "
                type="text"
                name="linkedin"
                placeholder="Enter your linkedin"
                {...register("linkedin", {
                  required: "linkedin is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "linkedin is not valid.",
                  },
                })}
              />
              {errors.linkedin && (
                <p className="errorMsg">{errors.linkedin.message}</p>
              )}
            </div>

            {/* Mobile number */}
            <div className="form-control ">
              <label>Moblie Number</label>
              <input
                className=" w-full input  input-bordered "
                type="tel"
                name="mobileNumber"
                placeholder="Enter your Moblie Number"
                {...register("mobileNumber", {
                  required: "Moblie Number is required.",
                  minLength: 11,
                  maxLength: 11,
                })}
              />
              {errors.mobileNumber && (
                <p className="errorMsg">{errors.mobileNumber.message}</p>
              )}
              {errors.password?.type === "checkLength" && (
                <p className="errorMsg">
                  Mobile number should contain 11 digits.
                </p>
              )}
            </div>
            <div className="form-control ">
              <label>Address</label>
              <input
                className=" w-full input  input-bordered "
                type="text"
                name="address"
                placeholder="Enter your Address"
                {...register("address", {
                  required: "address is required.",
                  pattern: {
                    value: /^([a-zA-Z ]){2,30}$/,
                    message: "address should not contain special characters.",
                  },
                })}
              />
              {errors.address && (
                <p className="errorMsg">{errors.address.message}</p>
              )}
            </div>

            <div className="divider"></div>

            <h1 className="text-xl">Educational Qualification</h1>

          
            <div >
              <form onSubmit={submit}>
                {formFields.map((form, eindex) => {
                  return (
                    <div key={eindex}>
                      <div className="form-control ">
                        <label>NameofExam</label>
                        <input
                          className=" w-full input  input-bordered "
                          type="text"
                          name="Name of Exam"
                          placeholder="Enter your Name of Exam"
                           onChange={event => handleFormChange(eindex, event)}
                          {...register("NameofExam")}
                        />
                        {errors.NameofExam && (
                          <p className="errorMsg">
                            {errors.NameofExam.message}
                          </p>
                        )}
                      </div>

                      <div className="form-control ">
                        <label>Institution</label>
                        <input
                          className=" w-full input  input-bordered "
                          type="text"
                          name="Institution"
                          placeholder="Enter your Institution"
                           onChange={event => handleFormChange(eindex, event)}
                          {...register("Institution")}
                        />
                        {errors.Institution && (
                          <p className="errorMsg">
                            {errors.Institution.message}
                          </p>
                        )}
                      </div>

                      <div className="form-control ">
                        <label>cgpaorgrade</label>
                        <input
                          className=" w-full input  input-bordered "
                          type="text"
                          name="cgpaorgrade"
                          placeholder="Enter your cgpaorgrade"
                           onChange={event => handleFormChange(eindex, event)}
                          {...register("cgpaorgrade")}
                        />
                        {errors.cgpaorgrade && (
                          <p className="errorMsg">
                            {errors.cgpaorgrade.message}
                          </p>
                        )}
                      </div>

                      <div className="form-control ">
                        <label>PassingYearI</label>
                        <input
                          className=" w-full input  input-bordered "
                          type="text"
                          name="PassingYearI"
                          placeholder="Enter your PassingYearI"
                           onChange={event => handleFormChange(eindex, event)}
                          {...register("PassingYearI")}
                        />
                        {errors.PassingYearI && (
                          <p className="errorMsg">
                            {errors.PassingYearI.message}
                          </p>
                        )}
                      </div>

                      <button onClick={() => removeFields(eindex)}>
                        Remove
                      </button>
                    </div>
                  );
                })}
              </form>
              <button onClick={addFields}>Add More..</button>

            
            </div>



             {/* Experiences  */}




            <div className="divider"></div>

            <h1 className="text-xl">Experience</h1>

          
            <div >
              <form onSubmit={submit}>
                {formFields.map((form, exindex) => {
                  return (
                    <div key={exindex}>
                      <div className="form-control ">
                        <label>jobtitle</label>
                        <input
                          className=" w-full input  input-bordered "
                          type="text"
                          name="Job Title"
                          placeholder="Enter your Job Title"
                           onChange={event => handleFormChange(exindex, event)}
                          {...register("jobtitle")}
                        />
                        {errors.jobtitle && (
                          <p className="errorMsg">
                            {errors.jobtitle.message}
                          </p>
                        )}
                      </div>

                      <div className="form-control ">
                        <label>companyname</label>
                        <input
                          className=" w-full input  input-bordered "
                          type="text"
                          name="companyname"
                          placeholder="Enter your companyname"
                           onChange={event => handleFormChange(exindex, event)}
                          {...register("companyname")}
                        />
                        {errors.companyname && (
                          <p className="errorMsg">
                            {errors.companyname.message}
                          </p>
                        )}
                      </div>

                      <div className="form-control ">
                        <label>From</label>
                        <input
                          className=" w-full input  input-bordered "
                          type="text"
                          name="From"
                          placeholder="Enter your From"
                           onChange={event => handleFormChange(exindex, event)}
                          {...register("From")}
                        />
                        {errors.From && (
                          <p className="errorMsg">
                            {errors.From.message}
                          </p>
                        )}
                      </div>

                      <div className="form-control ">
                        <label>to</label>
                        <input
                          className=" w-full input  input-bordered "
                          type="text"
                          name="to"
                          placeholder="Enter your to"
                           onChange={event => handleFormChange(exindex, event)}
                          {...register("to")}
                        />
                        {errors.to && (
                          <p className="errorMsg">
                            {errors.to.message}
                          </p>
                        )}
                      </div>

                      <button onClick={() => removeFields(exindex)}>
                        Remove
                      </button>
                    </div>
                  );
                })}
              </form>
              <button onClick={addFields}>Add More..</button>

             
            </div>




              {/* Skills  */}




              <div className="divider"></div>

<h1 className="text-xl">Skills</h1>


<div >
  <form onSubmit={submit}>
    {formFields.map((form, sindex) => {
      return (
        <div key={sindex}>
          <div className="form-control ">
            <label>Skillname</label>
            <input
              className=" w-full input  input-bordered "
              type="text"
              name="Job Title"
              placeholder="Enter your Job Title"
               onChange={event => handleFormChange(sindex, event)}
              {...register("Skillname")}
            />
            {errors.Skillname && (
              <p className="errorMsg">
                {errors.Skillname.message}
              </p>
            )}
          </div>

          <div className="form-control ">
            <label>Experienceyear</label>
            <input
              className=" w-full input  input-bordered "
              type="text"
              name="Experienceyear"
              placeholder="Enter your Experienceyear"
               onChange={event => handleFormChange(sindex, event)}
              {...register("Experienceyear")}
            />
            {errors.Experienceyear && (
              <p className="errorMsg">
                {errors.Experienceyear.message}
              </p>
            )}
          </div>

         

          <button onClick={() => removeFields(sindex)}>
            Remove
          </button>
        </div>
      );
    })}
  </form>
  <button onClick={addFields}>Add More..</button>

 
</div>






              {/* Projects */}




              <div className="divider"></div>

<h1 className="text-xl">Skills</h1>


<div >
  <form onSubmit={submit}>
    {formFields.map((form, pindex) => {
      return (
        <div key={pindex}>
          <div className="form-control ">
            <label>ProjectTitle</label>
            <input
              className=" w-full input  input-bordered "
              type="text"
              name="Job Title"
              placeholder="Enter your Job Title"
               onChange={event => handleFormChange(pindex, event)}
              {...register("ProjectTitle")}
            />
            {errors.ProjectTitle && (
              <p className="errorMsg">
                {errors.ProjectTitle.message}
              </p>
            )}
          </div>

          <div className="form-control ">
            <label>ProjectDescription</label>
            <input
              className=" w-full input  input-bordered "
              type="text"
              name="ProjectDescription"
              placeholder="Enter your ProjectDescription"
               onChange={event => handleFormChange(pindex, event)}
              {...register("ProjectDescription")}
            />
            {errors.ProjectDescription && (
              <p className="errorMsg">
                {errors.ProjectDescription.message}
              </p>
            )}
          </div>

          <div className="form-control ">
            <label>ProjectLink</label>
            <input
              className=" w-full input  input-bordered "
              type="text"
              name="ProjectLink"
              placeholder="Enter your ProjectLink"
               onChange={event => handleFormChange(pindex, event)}
              {...register("ProjectLink")}
            />
            {errors.ProjectLink && (
              <p className="errorMsg">
                {errors.ProjectLink.message}
              </p>
            )}
          </div>

         

          <button onClick={() => removeFields(pindex)}>
            Remove
          </button>
        </div>
      );
    })}
  </form>
  <button onClick={addFields}>Add More..</button>

 
</div>






            <div className="form-control mt-5">
              <label></label>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
