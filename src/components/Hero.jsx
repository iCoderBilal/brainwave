import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import heroVideo from "../assets/hero-video.mp4";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <span className="inline-block relative">
              Neptune
              <div className="absolute top-full left-0 w-full xl:-mt-2 bg-[#435498] h-2 rounded-lg " />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Neptune, the eighth and farthest planet from the Sun, remains one of
            the most fascinating and least explored giants in our Solar System.
            Known for its striking blue hue and powerful winds.
          </p>
          <Button href="/pricing" white>
            See The Latest Discoveries
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-[#212547] custom-boxShadow">
            <div className="relative">
              {/* <div className="h-[1.4rem] bg-[#212547] rounded-t-[0.9rem]" /> */}

              <div className=" overflow-hidden">
                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  className="w-full md:h-[500px] h-[300px] object-cover rounded-[16px]"
                  alt="AI"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    <p className="px-4 py-2 font-semibold">
                      The Ice Giant with Secrets
                    </p>
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -right-[5.5rem] bottom-[11rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    <p className="px-4 py-2 font-semibold">
                      Dive Into the Depths of Neptune 🌌
                    </p>
                  </ul>
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            {/* <div className="w-[1440px] h-[1800px]">.</div> */}
          </div>

          <BackgroundCircles />
        </div>

        {/* <CompanyLogos className="relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
