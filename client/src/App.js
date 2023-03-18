/*import BasicDocument from "./MyDocument";
function App() {
  return (
    <div className="App">
      <BasicDocument />
    </div>
  );
}
export default App;*/
import React, { useState } from "react";
function App() {
  const [files, setFiles] = useState("");

    const handleChange = e => {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        console.log("e.target.result", JSON.parse(e.target.result));
        setFiles(JSON.parse(e.target.result));
      };
    };
    return (
      <>
        <h1>Upload Json file - Example</h1>

        <input type="file" onChange={handleChange} />
        <br />
        {"uploaded file content -- " + files["movies"][0].title}
      </>
    );
}

export default App;