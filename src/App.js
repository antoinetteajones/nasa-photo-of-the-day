import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaCard from "./NasaCard"


function App() {
  const [pic, setPics] = useState({})
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=jDATz69RXFCLBLEe20yp53vmHZICHAl4luaM5bZB")
      .then(response => {
        console.log(response.data);
        const pic = response.data;
        console.log(pic);
        setPics(pic)
      })
      .catch(error => {
        console.log("ERROR:", error)
      });
  }, []);
  return (
    <div className="App">
      <NasaCard
        title={pic.title}
        date={pic.date}
        img={pic.url}
        explanation={pic.explanation}
      />
    </div>
  );
}

export default App;
