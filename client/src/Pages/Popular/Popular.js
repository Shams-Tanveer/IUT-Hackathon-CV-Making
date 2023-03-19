import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import TemplateComponent2 from "../BuiltinTemplates/TemplateComponent2";

const Popular = () => {
  const [cv, setcv] = useState();
  const [name, setname] = useState();
  const [mobile, setmobile] = useState();
  const [address, setaddress] = useState();
  const [facebook, setfacebook] = useState();
  const [tweeter, settweeter] = useState();
  const [Education, setEducation] = useState();
  const [Experiences, setExperiences] = useState();
  const [currentPositions, setcurrentPositions] = useState();
  const [skills, setskills] = useState();
  const [projects, setprojects] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(cv);
  const navigate=useNavigate();

  useEffect(() => {
    console.log("fetch uis ");
    setIsLoading(true);
    fetch(
      `https://iut-hackathon-cv-making-woad.vercel.app/cv/getinfo/?email=${user.email}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcv(data);
        setIsLoading(false);

        setname(user.displayName);
        setmobile(cv?.cv?.mobile);
        setaddress(cv?.cv?.address);
        setfacebook(cv?.cv?.facebook);
        settweeter(cv?.cv?.tweeter);
        setEducation(cv?.cv?.Education);
        setExperiences(cv?.cv?.Experiences);
        setcurrentPositions(cv?.cv?.currentPosition);
        setskills(cv?.cv?.skills);
        setprojects(cv?.cv?.projects);
      });
  }, []);
  const userprofile={

    "name":name,
    "useremail":user.email,
    "mobile":mobile,
    "address":address,
    "facebook":facebook,
    "tweeter":tweeter,
    "education":Education,
    "experiences":Experiences,
    "currentPositions":currentPositions,
    "skills":skills,
    "projects":projects,
          }
  

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  const handleUpdate=()=>{
    console.log(userprofile)
    fetch(`https://iut-hackathon-cv-making-woad.vercel.app/cv/updatecv`, {
        method: "PUT",
        credentials:"include",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(userprofile),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/pdftype")
         
        });
  }

  return (
  
    <div className="w-96 mx-auto">
      <h1>Please Check the values</h1>
      <div className="text-center">
        <h1>Basic Infos</h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            defaultValue={user.displayName}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(event) => {
              setname(event.target.value);
              console.log(event.target.value);
              console.log(name);
            }}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            readOnly
            defaultValue={user.email}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Mobile</span>
          </label>
          <input
            defaultValue={cv?.cv?.mobile}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(event) => {
              setmobile(event.target.value);
              console.log(event.target.value);
              console.log(mobile);
            }}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            defaultValue={cv?.cv?.address}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(event) => {
              setaddress(event.target.value);
              console.log(event.target.value);
              console.log(address);
            }}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">facebook</span>
          </label>
          <input
            defaultValue={cv?.cv?.facebook}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(event) => {
              setfacebook(event.target.value);
              console.log(event.target.value);
              console.log(facebook);
            }}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Tweeter</span>
          </label>
          <input
            defaultValue={cv?.cv?.tweeter}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(event) => {
              settweeter(event.target.value);
              console.log(event.target.value);
              console.log(tweeter);
            }}
          />
        </div>

        <h1>Education Qualification</h1>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <input
            defaultValue={cv?.cv?.education}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(event) => {
              setEducation(event.target.value);
              console.log(event.target.value);
              console.log(Education);
            }}
          />
        </div>

        <h1>Experiences</h1>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Experiences</span>
          </label>
          <input
            defaultValue={cv?.cv?.experiences}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(event) => {
              setExperiences(event.target.value);
              console.log(event.target.value);
              console.log(Experiences);
            }}
          />
        </div>

        <h1>Current Positions</h1>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">current Positions</span>
          </label>
          <input
            defaultValue={cv?.cv?.currentPosition}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(event) => {
              setcurrentPositions(event.target.value);
              console.log(event.target.value);
              console.log(currentPositions);
            }}
          />
        </div>

        <h1>Skills</h1>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Skills</span>
          </label>
          <input
            defaultValue={cv?.cv?.skills === " " ? "" : cv?.cv?.skills}
            type="textarea"
            placeholder="Type here"
            className="input input-bordered w-96 textarea"
            onChange={(event) => {
              setskills(event.target.value);
              console.log(event.target.value);
              console.log(skills);
            }}
          />
        </div>

        <h1>Projects</h1>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Projects</span>
          </label>
          <input
            defaultValue={cv?.cv?.Projects}
            type="textarea"
            placeholder="Type here"
            className="input input-bordered w-96 textarea"
            onChange={(event) => {
              setprojects(event.target.value);
              console.log(event.target.value);
              console.log(projects);
            }}
          />
        </div>

        <button onClick={handleUpdate} className="btn btn-primary">Generate CV</button>
  
        {}
      </div>
    </div>
  );
};

export default Popular;
