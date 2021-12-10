import { useState, useEffect } from "react";

const App = () => {
  const [msg, setMsg] = useState("");

  const getData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const res = await fetch(`http://localhost:3001/todo`, options);
    const data = await res.json();
    setMsg(data.text);
  };

  useEffect(() => {
    getData();
  });

  return <p>Response: {msg}</p>;
};

export default App;
