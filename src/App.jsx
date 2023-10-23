import {useEffect, useState} from 'react'
import Navbar from "./components/Navbar"
import Films from './components/Films';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [films, setFilms] = useState([]);

  const peticionGet=async()=>{
    axios.get("http://localhost:9000/api/films")
    .then(response=>{
      setFilms(response.data)
    }).catch(error=>{
      setFilms(error);
    })
  }

  useEffect(()=>{
    peticionGet();
  },[])
  return (
    <>
      <body className="bg-secondary">
        
        <Navbar titulo="App de peliculas" />

        <div className="container mt-5">
          <Films films ={films}/>
        </div>
      </body>
    </>
  )
}



export default App


/*
function App() {

  const [films, setFilms] = useState([]);


  const url = "http://localhost:9000/api/films";

  const fetchFilms = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.log(error))
  };


  useEffect(() => {
    fetchFilms(url);
  }, [])
  

  return (
    <>
      <body className="bg-secondary">
        
        <Navbar titulo="App de peliculas" />

        <div className="container mt-5">
          <Films films ={films}/>
        </div>
      </body>
    </>
  )
}

export default App
*/