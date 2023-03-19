import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { AiFillTwitterCircle ,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import TemplateComponent1 from "../Pages/BuiltinTemplates/TemplateComponents/TemplateComponent1"
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";

const CVdownloader = () => {
    const styles = StyleSheet.create({
        page: {
          backgroundColor: "#d11fb6",
          color: "white",
        },
        section: {
          margin: 100,
          padding: 10,
        },
        viewer: {
          width: "1200px", //the pdf viewer will take up all of the width and height
          height: window.innerHeight,
        },
      });
    


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





    return (
        <div>
            <h1>hello</h1>
            <TemplateComponent1 pcv={cv}></TemplateComponent1>
            
       
    
        </div>
    );
};

export default CVdownloader;