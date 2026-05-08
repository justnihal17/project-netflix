import Header from "./Header";
import {} from "react-router-dom";
import Hero from "./hero";
import Heading from "./Heading";
const Body = () => {
  return (
    <div
      className="h-screen"
      style={{
  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)),
    url('https://rehan1032.github.io/netflix-landingPage/netflix-bg.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center", 
}}
    >
      <Header/>
      {/* <Hero/> */} 
      {/* <Heading/> */}
    </div> 
  );
};

export default Body; 
