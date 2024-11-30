import Section from "./Section";
import Heading from "./Heading";
import neptuneAtmosphere from "../assets/neptune-atmosphere.png";
import neptuneMoon from "../assets/neptune-moon.jpg";
import neptuneRings from "../assets/neptune-rings.png";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use" className="pt-0">
      <div className="container">
        {/* <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        /> */}

        <div className="relative pt-0">
          <div className="relative z-1 flex lg:items-center items-start min-h-[38rem] mb-5 p-4 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 lg:min-h-[30rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none lg:w-3/5 xl:w-auto">
              <img
                className="w-full object-cover md:object-right h-full lg:w-[48vw]"
                alt="Smartest AI"
                src={neptuneAtmosphere}
              />
            </div>

            <div className="relative z-1 max-w-[100%] lg:max-w-[25rem] ml-auto">
              <h4 className="h4 mb-4">Atmosphere</h4>
              <p className="body-2 mb-2 text-n-3">
                Neptune’s atmosphere is mostly{" "}
                <b className="text-white">80% hydrogen, 19% helium,</b> and
                traces of <b className="text-white">methane,</b> giving it its
                iconic blue color. The planet experiences{" "}
                <b className="text-white">high-speed winds</b> (up to 1,500 mph)
                and powerful storms like the{" "}
                <b className="text-white">Great Dark Spot</b>. With an average
                temperature of <b className="text-white">-214°C (-353°F)</b>,
                Neptune has the coldest atmosphere in the Solar System, creating
                a <b className="text-white">turbulent and dynamic</b>{" "}
                environment.
              </p>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[30rem]">
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={neptuneMoon}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
              </div>

              <div className="py-12 px-4 xl:px-8 pb-0">
                <h4 className="h4 mb-4">Neptune Moons</h4>
                <p className="body-2 mb-[0rem] text-n-3">
                  Neptune has <b className="text-white">14 moons,</b> and the
                  biggest and most important one is{" "}
                  <b className="text-white">Triton.</b> Triton is special
                  because it moves in the opposite direction to Neptune's
                  rotation, which means it was probably{" "}
                  <b className="text-white">caught</b> by Neptune's gravity.
                  Triton also has <b className="text-white">active geysers</b>{" "}
                  and a <b className="text-white">frozen surface.</b> Other
                  moons include{" "}
                  <b className="text-white">Proteus, Nereid, and Larissa.</b>{" "}
                  Proteus is <b className="text-white">oddly shaped,</b> Nereid
                  moves in a strange orbit, and Larissa is a small, icy moon.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[30rem]">
              <div className="py-4 px-4 xl:px-8">
                <h4 className="h4 mb-4">Neptune Rings</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Neptune’s <b className="text-white">rings</b>, first
                  discovered by <b className="text-white">Voyager 2</b>, are
                  faint and dark, made up of{" "}
                  <b className="text-white">ice particles, dust</b>, and{" "}
                  <b className="text-white">rock</b>. The planet's moons
                  interact with the rings, with their gravity shaping the rings’
                  structure and maintaining their unique features. These
                  interactions{" "}
                  <b className="text-white">create gaps and fine details</b> in
                  the ring system.
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={neptuneRings}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
