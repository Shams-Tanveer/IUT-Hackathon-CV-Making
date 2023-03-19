import React from 'react';
import { useNavigate } from 'react-router-dom';
import AutomaticCv from '../../AutomaticCV/AutomaticCv';
import CVdownloader from '../../CVdownloader/CVdownloader';
import TemplateComponent1 from '../BuiltinTemplates/TemplateComponents/TemplateComponent1';
import CVGenerator from '../BuiltinTemplates/TemplateComponents/TemplateComponent1';
import Customize from '../Cutomize/Customize';


const Home = () => {
    const navigate=useNavigate()
    const getData=()=>{
        fetch(`https://iut-hackathon-cv-making-woad.vercel.app/cv/getinfo/?email=1925ashraf@gmail.com`, {
            method: "GET",
            credentials:"include",
            headers: {
            
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
         
          
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              navigate("/popular")
            
             
            });
      
    }
    return (
        <div>
          <Customize></Customize>
            <AutomaticCv></AutomaticCv>
           
            <button className='btn btn-primary' onClick={getData}>Get </button>
     
            
      



 
 





           
        </div>
    );
};

export default Home;