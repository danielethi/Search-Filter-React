import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [arr, setArr] = useState([
    { name: "Liara", age: 23 },
    { name: "Voni", age: 23 },
    { name: "Doe", age: 23 },
    { name: "daniel", age: 23 },
    { name: "kiame", age: 23 },
  ]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const filteredData = () => {
    return arr.filter((item) => item.name.toLowerCase().includes(data.toLowerCase()));
  };

  return (
    <div>
      <input type="text" value={data} onChange={handleChange} />
      {filteredData().map((item) => {
        return (
          <div key={item.name}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
