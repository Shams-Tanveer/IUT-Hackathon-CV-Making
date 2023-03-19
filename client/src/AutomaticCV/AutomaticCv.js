import React from "react";
import { useForm } from "react-hook-form";

const AutomaticCv = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (datas) =>{ 
    console.log(datas)

    fetch(`https://iut-hackathon-cv-making-woad.vercel.app/user/aboutme`, {
        method: "POST",
        credentials:"include",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(datas),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
         
        });

        console.log(datas);



 

}
  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <textarea
            className="textarea textarea-bordered h-24 w-2/3 my-10"
            placeholder="Tell us About you"
            {...register("aboutme", { required: true })}
          />
        

          <button className="btn btn-primary mx-auto form-control" type="submit">
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default AutomaticCv;
