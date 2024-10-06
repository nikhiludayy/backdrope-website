import React from "react";
import Hero from "./hero";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { IoIosReturnRight } from "react-icons/io";
import People from "./People";
const About = () => {
  return (
    <div
      style={{
        background:
          " radial-gradient(101.32% 101.32% at 53.02% 0%, #272727 0%, rgba(29, 28, 28, 0.28) 50%, #272727 100%)",
      }}
      className="max-w-screen-2xl mx-auto h-full "
    >
      <Navbar />

      <Hero isabout={true} touch={true} isscroll = {true}/>

      <div
        style={{
          background:
            " radial-gradient(244.59% 222.87% at 50% 18.08%, rgba(46, 46, 46, 0.50) 17.21%, rgba(255, 255, 255, 0.25) 100%)",
        }}
        className="max-w-full px-16 py-10 rounded-t-3xl mt-20"
      >
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="font-semibold italic">
              Our Story: From Passion to Profession
            </h1>
          </div>
          <div>
            <p className="">
              Backdrope began as a dream, driven by the passion and vision of
              Madhvan, a mechanical engineer who decided to take a leap of faith
              and follow his heart into the world of photography. After leaving
              a stable engineering career, Madhvan sought to channel his
              creativity into something that truly resonated with him—capturing
              life’s moments through the lens of a camera. But the journey
              wasn’t meant to be a solo one. <br />
              <br /> Realizing the power of collaboration, Madhvan reached out
              to a group of like-minded friends, each equally passionate and
              already freelancing in various creative fields—photography,
              cinematography, designing, digital marketing, website development,
              and editing. He pitched them the idea of uniting under one
              umbrella to provide a comprehensive suite of creative services.
              The response was overwhelming, as every friend immediately said
              "yes" to joining this collective vision. <br />
              <br /> With that, Backdrope was born. Our team is composed of
              professionals who have turned their individual passions into a
              shared mission: to provide end-to-end services for projects,
              events, special occasions, and brand building. We don’t just take
              on projects; we immerse ourselves in them, ensuring that each one
              reflects our deep commitment to quality and client satisfaction.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <div>
            <h1 className="font-semibold italic">The Backdrope Promise</h1>
          </div>
          <div>
            <p>
              At Backdrope, our vision is simple: to turn creativity into an
              experience that leaves a lasting impression. Whether it’s
              capturing the most important moments in life, building brands from
              the ground up, or designing a compelling digital presence, we aim
              to deliver exceptional quality in everything we do. <br />
              <br /> We are not just a service provider—we are your partners in
              crafting memorable experiences. Our ultimate goal is to grow, not
              only as professionals but also by continuously elevating the
              experience for every client we work with. With passion as our
              driving force, we are here to ensure that every collaboration is
              special, meaningful, and a step toward realizing your dreams.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-24 py-16 flex flex-col gap-6">
        <div>
          <h5 className="text-sm">Meet our</h5>
          <h1 className="text-4xl font-semibold">PEOPLE</h1>
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="text-center">
            our team is the heart of everything we do. We are a group of
            passionate creatives, strategists, and innovators dedicated to
            bringing your vision to life. With expertise in photography,
            videography, design, branding, and digital marketing, we collaborate
            to deliver high-quality results that help your brand stand out.
          </p>
        </div>
      </div>
      <People/>
    </div>
  );
};

export default About;
