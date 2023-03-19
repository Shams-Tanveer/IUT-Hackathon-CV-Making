import React, { useEffect, useState } from "react";

const Customize = () => {
  const [aboutus, setaboutus] = useState();
  const [prof, setprof] = useState();
  const [rec, setrec] = useState();
  const handleGeneratae = () => {
    fetch(
      `https://iut-hackathon-cv-making-woad.vercel.app/user/recommendation`,
      {
        method: "POST",
        credentials: "include",
     
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ aboutme: aboutus, desire: prof }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setrec(data.recommendation);
       
      });
  };
  useEffect(() => {
    console.log(rec);
  }, [rec]);
  return (
    <div>
      <main className=" bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <div class="py-10  flex flex-wrap justify-center">
            <div class="w-6/12 sm:w-4/12 px-4"></div>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 "></div>

          <div className="mx-auto text-center  w-96">
            <textarea
              className=" textarea h-40 w-96"
              placeholder="About Us"
              onChange={(event) => {
                console.log(event.target.value);
                setaboutus(event.target.value);
              }}
            ></textarea>
            <textarea
              className=" textarea h-16 w-96"
              placeholder="Desired Profession"
              onChange={(event) => {
                console.log(event.target.value);
                setprof(event.target.value);
              }}
            ></textarea>
            <button
              onClick={handleGeneratae}
              className="btn btn-active btn-[#0c4a6e]"
            >
              Generate
            </button>
          </div>
        </section>
      </main>

      {rec  ? (
        <div>
        <h1>Recomendations</h1>
        <p>{rec}</p>
      </div>
       
      ) : (
          <>hello</>
      )}
    </div>
  );
};

export default Customize;
