import { useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect } from "react";
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

  

  return (
    <section className="w-full h-[calc(100vh-80px)] bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">Iphone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video src={videosrc} className="pointer-events-none" autoPlay muted loop>
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;