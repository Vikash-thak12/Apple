import { useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Hero = () => {

  const [videosrc, SetVideosrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideosize = () => {
    if(window.innerWidth < 760){
      SetVideosrc(smallHeroVideo)
    } else {
      SetVideosrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideosize)

    return () => {
      window.removeEventListener('resize', handleVideosize)
    }
  },[])

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1
    })

    gsap.to("#detail", {
      y: -20,
      opacity: 1,
      delay: 1.4,
      duration: 1
    })
  },[])

  return (
    <section className="w-full h-[calc(100vh-80px)] bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Iphone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video src={videosrc} className="pointer-events-none" autoPlay muted loop>
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="detail" className="flex flex-col items-center justify-center translate-y-20 opacity-0">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;