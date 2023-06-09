import React from "react";
import Pdf from "react-to-pdf";
import "./com.css"
const TemplateComponent2 = () => {

    const ref = React.createRef();

    const person=JSON.parse(localStorage.getItem('person'));
    console.log(person.basicInfos.name);
    const image=person.image;
    const basicInfos=person.basicInfos;
    const education=person.education;
    const experience=person.experience;
    const skills=person.skills;
    const projects=person.projects;
    console.log(education)
    

  return (
    <div >
         <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn btn-danger mt-20" onClick={toPdf}>Download</button>}
      </Pdf>
      <div style={{width: 900}} ref={ref} class="flex justify-center content-center mr-20">
        <div class="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10">
          <header>
            <ul class="flex flex-wrap justify-end gap-2">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                  target="_blank"
                >
                  <svg
                    class="w-5 h-5 fill-current"
                    role="img"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/"
                  class="bg-gray-700 p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    role="img"
                    class="w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://dev.to/"
                  class="bg-black p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
                  target="_blank"
                >
                  <svg
                    class="w-5 h-5"
                    role="img"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 32 447.99999999999994 448"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2500"
                    height="2321"
                  >
                    <g fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>

            <div class="flex justify-between items-center">
              <div>
                <div class="bg-cover bg-no-repeat rounded-full h-52 w-52 bg-[url('https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')]"></div>
              </div>
              <div class="grid justify-items-end">
                <h1 class="text-7xl font-extrabold">{person.basicInfos.name}</h1>
                <p class="text-xl mt-5">Aspiring Front-End Developer</p>
              </div>
            </div>
          </header>

          <main class="flex gap-x-10 mt-10">
            <div class="w-2/6">
              <strong class="text-xl font-medium">Contact Details</strong>
              <ul class="mt-2 mb-10">
               <li>Email : {person.basicInfos.email}</li>
               <li>mobile Number :{person.basicInfos.mobileNumber}</li>
               <li>Linked In {person.basicInfos.linkedin}</li>
              </ul>

              <strong class="text-xl font-medium">Skills</strong>
              <ul class="mt-2 mb-10">
              {
                    skills.map((skill)=>
                        <div>
                            <h1>Skill Name : {skill["Skill Name"]}</h1>
                            <h1>Year of Experience : {skill["Year of Experience"]}</h1>
                            <h1>Details : {skill["Details"]}</h1>
                            <br />
                            <br />
                        </div>
                )
                  }
            
              </ul>

             
            </div>

            <div class="w-4/6">
              <section>
                <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">About</h2>
                <p class="mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus deserunt modi qui. Dolorum aliquid quasi velit
                  cupiditate officia magnam impedit, sapiente hic, eaque quaerat
                  ullam fugiat reprehenderit voluptates odit! Error. Tempore
                  fuga iusto eveniet omnis impedit repellat ab repellendus
                  nesciunt similique. Iure voluptates, enim nesciunt tempora
                  amet earum, porro rem ad et sequi corrupti neque quidem?
                  Debitis quo quibusdam nemo. Nam doloremque perferendis tempora
                  asperiores, ullam praesentium et, voluptas pariatur illo
                  aliquid similique, fugiat repellendus ipsa necessitatibus
                  minus hic culpa quasi. Sed voluptate itaque accusantium earum
                  cupiditate ipsa neque magnam!
                </p>
              </section>
              <section>
                <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">
                  Projects
                </h2>
                <ul class="mt-1">
                  {
                    projects.map(project=>
                        <div>
                            <h1>Project Name : {project["Project Name"]}</h1>
                            <h1>Project Duration :{project["Duration"]}</h1>
                            <h1>Project Details : {project["Details"]}</h1>
                            <br />
                            <br />
                            <br />
                        </div>
                    )
                  }
                </ul>
              </section>
              <section>
                <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">
                  Work Experiences
                </h2>
                {
                    experience.map(project=>
                        <div>
                            <h1>Title of Post : {project["Title of Post"]}</h1>
                            <h1> Name of Company :{project["Name of Company"]}</h1>
                            <h1> From : {project["From"]}</h1>
                             <h1> To : {project["To"]}</h1>
                            <br />
                            <br />
                            <br />
                        </div>
                    )
                  }
              </section>
              <section>
                <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">
                  Education
                </h2>
                {
                    education.map(project=>
                        <div>
                            <h1>Title of Exam : {project["Title of Exam"]}</h1>
                            <h1> Year of Passing :{project["Year of Passing"]}</h1>
                            <h1> Name of Institution : {project["Name Of Institution"]}</h1>
                             <h1> Result : {project["Result"]}</h1>
                            <br />
                            <br />
                            <br />
                        </div>
                    )
                  }

              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TemplateComponent2;
