import React from "react"
import Card from "./card.jsx"
import "./App.css"

import profilePicture1 from "./images/images.jpg";
import profilePicture2 from "./images/images1.jpg";
import profilePicture3 from "./images/images2.jpg";


function App() {
  
  return (
    <>
    <Card 
    image={profilePicture1}
    name="Alfiya Heba"
    description="Passionate about coding and creativity"/>
    <Card 
    image={profilePicture2}
    name="John Doe"
    description="Loves Designing and frontend Development"
    />
    <Card 
    image={profilePicture3}
    name="John Smith"
    description="Backend Expert and problem solver"/>
   
    </>
  );
}

export default App
