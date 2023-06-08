import React, { useState, useEffect } from 'react';

export default function App() {

  const [value, setValue] = useState("Aungpor World");
  const aungpor = {greeting: ["aungpor1","aowtangkeii"],  goodbye:["ryu"]}

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <h1 style={{ color: "red" }}>{value}</h1>
      <p>{aungpor.greeting[0]}</p>
    </div>

  );
}


