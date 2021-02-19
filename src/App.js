import React,{useState,useEffect} from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from './components/Resume';
import Skill from "./components/Skill";
import Awards from "./components/Awards";

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
        
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <Banner data={data.banner}/>
      <Nav data={data.navigation}/>
      <About data={data.about}/>
      <Resume data={data.resume}/>
      <Skill data={data.skills}/>
      <Awards data={data.awards}/>
      <Projects data={data.projects}/>
      <Contact data={data.contact} social={data.banner}/>
    </div>
  );
}

export default App;
