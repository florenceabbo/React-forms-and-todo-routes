import React, { useState } from "react";

function Dropdown() {
  const [selects, setSelects] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`selects:${selects}`);
    setSelects('')
  };
  return (
    <div>
      {/* <h1>{selects}</h1> */}
      

      <form className="formb" onSubmit={handleSubmit}>
      <div>
            <h2>Select your best programing language</h2>
          </div>
        <select value={selects} onChange={(e) => setSelects(e.target.value)}>
        <option></option>
          <option>Javascript</option>
          <option>Reactjs</option>
          <option>Python</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>PHP</option>
        </select>
        <button className="button2">Submit</button>
        
      </form>
    </div>
  );
}
export default Dropdown