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
        
        console.log(pic);
        setPics(response.data)
      })
      .catch(error => {
        console.log("ERROR:", error)
      });
  },[]);
  return (
    <div className="App">
      <NasaCard key = {pic.id}
        title={pic.title}
        date={pic.date}
        img={pic.url}
        explanation={pic.explanation}
      />
    </div>
  );
}

export default App;
