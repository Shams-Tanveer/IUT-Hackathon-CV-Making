import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./UpdateProfile.css";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const [imagedata,setimagedata]=useState()

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    navigate("/home");
  };
  const [basicInfos,setbasicInfos]=useState();

  const imageHostKey = process.env.REACT_APP_imgbb_KEY;

  const handleSignup = (data) => {
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
          setimagedata(imgData)

          // google sign up using password and email

         console.log(data)
         setbasicInfos(data);
        }
      });

    
  };

  const handleupdate=()=>{
    const person={
      "image":imagedata,
      "basicInfos":basicInfos,
      "education":eduinputFields,
      "experience":expinputFields,
      "skills":sklinputFields,
      "projects":proinputFields,

    }
    window.localStorage.setItem('person', JSON.stringify(person));
    console.log(JSON.stringify(person))
    navigate("/")

  }

  const [eduinputFields, seteduInputFields] = useState([
    {
      "Title of Exam": "",
      "Name Of Institution": "",
      "Year of Passing": "",
      Result: "",
    },
  ]);
  const edhandleFormChange = (index, event) => {
    let data = [...eduinputFields];
    data[index][event.target.name] = event.target.value;
    seteduInputFields(data);
  };

  const edusubmit = (e) => {
    e.preventDefault();
    console.log(eduinputFields);
  };
  const eduaddFields = () => {
    let object = {
      "Title of Exam": "",
      "Name Of Institution": "",
      "Year of Passing": "",
      Result: "",
    };

    seteduInputFields([...eduinputFields, object]);
  };
  const eduremoveFields = (index) => {
    let data = [...eduinputFields];
    data.splice(index, 1);
    seteduInputFields(data);
  };

  const [expinputFields, setexpInputFields] = useState([
    {
      "Title of Post": "",
      "Name Of Company": "",
      From: "",
      To: "",
    },
  ]);
  const exphandleFormChange = (index, event) => {
    console.log(event.target.value);
    let data = [...expinputFields];
    data[index][event.target.name] = event.target.value;
    setexpInputFields(data);
  };

  const expsubmit = (e) => {
    e.preventDefault();
    console.log(expinputFields);
  };
  const expaddFields = () => {
    let object = {
      "Title of Post": "",
      "Name Of Company": "",
      From: "",
      To: "",
    };

    setexpInputFields([...expinputFields, object]);
  };
  const expremoveFields = (index) => {
    let data = [...expinputFields];
    data.splice(index, 1);
    setexpInputFields(data);
  };

  const [sklinputFields, setsklInputFields] = useState([
    {
      "Skill Name": "",
      "Year of Experience": "",
      Details: "",
    },
  ]);
  const sklhandleFormChange = (index, event) => {
    console.log(event.target.value);
    let data = [...sklinputFields];
    data[index][event.target.name] = event.target.value;
    setsklInputFields(data);
  };

  const sklsubmit = (e) => {
    e.preventDefault();
    console.log(sklinputFields);
  };
  const skladdFields = () => {
    let object = {
      "Skill Name": "",
      "Year of Experience": "",
      Details: "",
    };

    setsklInputFields([...sklinputFields, object]);
  };
  const sklremoveFields = (index) => {
    let data = [...sklinputFields];
    data.splice(index, 1);
    setsklInputFields(data);
  };

  const [proinputFields, setproInputFields] = useState([
    {
      "Project Name": "",
      Duration: "",
      Details: "",
    },
  ]);
  const prohandleFormChange = (index, event) => {
    console.log(event.target.value);
    let data = [...proinputFields];
    data[index][event.target.name] = event.target.value;
    setproInputFields(data);
  };

  const prosubmit = (e) => {
    e.preventDefault();
    console.log(proinputFields);
  };
  const proaddFields = () => {
    let object = {
      "Project Name": "",
      Duration: "",
      Details: "",
    };

    setproInputFields([...proinputFields, object]);
  };
  const proremoveFields = (index) => {
    let data = [...proinputFields];
    data.splice(index, 1);
    setproInputFields(data);
  };

  return (
    <div>
      <div className="text-left">
        <h1 className="font-bold text-center">Basic Informations</h1>

        <div className=" w-96 mx-auto mt-10 ">
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

            <div className="form-control mt-5">
              <label></label>
              <button className="btn btn-primary" type="submit">
                Add Basics Infos
              </button>
            </div>
          </form>

          <form>
            {eduinputFields.map((input, index) => {
              return (
                <div key={index}>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Title of The Exam</span>
                    </label>
                    <input
                      name="Title of Exam"
                      placeholder="Title of Exam"
                      value={input["Title of Exam"]}
                      onChange={(event) => edhandleFormChange(index, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Name of Institution</span>
                    </label>
                    <input
                      name="Name Of Institution"
                      placeholder="Name Of Institution"
                      value={input["Name Of Institution"]}
                      onChange={(event) => edhandleFormChange(index, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Year of Passing</span>
                    </label>
                    <input
                      name="Year of Passing"
                      placeholder="Year of Passing"
                      value={input["Year of Passing"]}
                      onChange={(event) => edhandleFormChange(index, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Result</span>
                    </label>

                    <input
                      name="Result"
                      placeholder="Result"
                      value={input.Result}
                      onChange={(event) => edhandleFormChange(index, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>

                  <button
                    className="form-control btn btn-primary mx-auto mt-4"
                    onClick={() => eduremoveFields(index)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </form>
          <button
            className="btn btn-success mx-auto form-control"
            onClick={eduaddFields}
          >
            Add More..
          </button>
          <br />
          <button
            className="form-control btn btn-secondary w-2/3 mx-auto"
            onClick={edusubmit}
          >
            Add Education Qualification
          </button>

          <form>
            {expinputFields.map((input, expindex) => {
              return (
                <div key={expindex}>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Title of The Post</span>
                    </label>
                    <input
                      name="Title of Post"
                      placeholder="Title of Post"
                      value={input["Title of Post"]}
                      onChange={(event) => exphandleFormChange(expindex, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Name of Company</span>
                    </label>
                    <input
                      name="Name Of Company"
                      placeholder="Name Of Company"
                      value={input["Name Of Company"]}
                      onChange={(event) => exphandleFormChange(expindex, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">From</span>
                    </label>
                    <input
                      name="From"
                      placeholder="From"
                      value={input["From"]}
                      onChange={(event) => exphandleFormChange(expindex, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">To</span>
                    </label>

                    <input
                      name="To"
                      placeholder="To"
                      value={input.To}
                      onChange={(event) => exphandleFormChange(expindex, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>

                  <button
                    className="form-control btn btn-primary mx-auto mt-4"
                    onClick={() => expremoveFields(expindex)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </form>
          <button
            className="btn btn-success mx-auto form-control"
            onClick={expaddFields}
          >
            Add More..
          </button>
          <br />
          <button
            className="form-control btn btn-secondary w-2/3 mx-auto"
            onClick={expsubmit}
          >
            Add Experience Qualification
          </button>

          <form>
            {sklinputFields.map((input, sklindex) => {
              return (
                <div key={sklindex}>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Skill Name</span>
                    </label>
                    <input
                      name="Skill Name"
                      placeholder="Skill Name"
                      value={input["Skill Name"]}
                      onChange={(event) => sklhandleFormChange(sklindex, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Year of Experience</span>
                    </label>
                    <input
                      name="Year of Experience"
                      placeholder="Year of Experience"
                      value={input["Year of Experience"]}
                      onChange={(event) => sklhandleFormChange(sklindex, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Details</span>
                    </label>
                    <textarea
                      name="Details"
                      placeholder="Details"
                      value={input["Details"]}
                      onChange={(event) => sklhandleFormChange(sklindex, event)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>

                  <button
                    className="form-control btn btn-primary mx-auto mt-4"
                    onClick={() => sklremoveFields(sklindex)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </form>
          <button
            className="btn btn-success mx-auto form-control"
            onClick={skladdFields}
          >
            Add More..
          </button>
          <br />
          <button
            className="form-control btn btn-secondary w-2/3 mx-auto"
            onClick={sklsubmit}
          >
            Add Skills
          </button>



          <form>
          {proinputFields.map((input, index) => {
            return (
              <div key={index}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Project Name</span>
                  </label>
                  <input
                    name="Project Name"
                    placeholder="Project Name"
                    value={input["Project Name"]}
                    onChange={(event) => prohandleFormChange(index, event)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Duration</span>
                  </label>
                  <input
                    name="Duration"
                    placeholder="Duration"
                    value={input["Duration"]}
                    onChange={(event) => prohandleFormChange(index, event)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <textarea
                    name="Details"
                    placeholder="Details"
                    value={input["Details"]}
                    onChange={(event) => prohandleFormChange(index, event)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <button
                  className="form-control btn btn-primary mx-auto mt-4"
                  onClick={() => proremoveFields(index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </form>
        <button
          className="btn btn-success mx-auto form-control"
          onClick={proaddFields}
        >
          Add More..
        </button>
        <br />
        <button
          className="form-control btn btn-secondary w-2/3 mx-auto"
          onClick={prosubmit}
        >
          Add More Projects
        </button>
        </div>

       
      </div>

      <button onClick={handleupdate} className="btn btn-info">Save to Profile</button>
    </div>
  );
};

export default UpdateProfile;
