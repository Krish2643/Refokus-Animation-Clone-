import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import './App.css'
import {gsap, CSSPlugin, Expo} from 'gsap';

gsap.registerPlugin(CSSPlugin);

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [counter, setCounter] = useState(0);
 
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 20);
  }, []);

   
  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.3,
    })
    .to(".hide", { opacity: 0, duration: 0.3 })
    .to(".hide", { display: "none", duration: 0.3 })
    .to(".follow", {
      height: "100%",
      ease: Expo.easeInOut,
      duration: 0.7,
      // delay: 0.5,
    })
    .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
    .to(".title-lines", { display: "block", duration: 0.1 })
    .to(".title-lines", {
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  }

  return (
    <div className="AppContainer w-full h-[100vh] relative text-center text-black ">
      <div className="loading size-full bg-[#121212] flex absolute justify-center items-center top-0 ">
       <div className="follow absolute bg-[#7443FF] h-[2px] w-0 left-0 z-10 "></div>

        <div style={{width: counter + "%"}} className={`hide absolute left-0 bg-[#fff] h-[2px] transition ease-out delay-[0.4s]`}></div>
      
         <div className="hide absolute text-9xl text-[#fff] translate-y-[-20px] font-normal ">
          {counter}%
         </div>
      </div>
    <div className="content absolute z-20 w-0 h-[100%] bg-zinc-900  text-white font-['satoshi']">
      <div className="title-lines bg-zinc-900 opacity-0 hidden" >
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
      </div>
    </div>
    </div>
  );
}

export default App;
