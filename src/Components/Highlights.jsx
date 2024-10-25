import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0, 
      opacity: 1, 
      delay: 1.4, 
      duration: 1
    })

    gsap.to(".link", {
      y: 0, 
      opacity: 1,
      delay: 1.4,
      duration: 1,
      stagger: 0.2
    })

  },[])
  return (
    <section className="w-screen overflow-hidden common-padding h-full bg-zinc">
      <div className="screen-max-width">
        <div className="w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading ">Get the Highlights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the Film
              <img src={watchImg} alt="Watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the Event
              <img src={rightImg} alt="Right" className="ml-2" />
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Highlights;