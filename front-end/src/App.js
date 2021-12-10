import { useState, useEffect } from "react";

const App = () => {
  const [msg, setMsg] = useState("");

  const getData = async () => {
    const res = await fetch("http://localhost:3005/todo");
    const data = await res.json();
    setMsg(data.text);
  };

  useEffect(() => {
    getData();
  });

  return <p>Response: {msg}</p>;
};

export default App;
