import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  // console.log(data);

  return (
    <>
      <h1 className="text-center text-3xl my-5">API data fatching</h1>
      <div className="flex flex-wrap">
        {data?.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
