import React from "react";
import AboutComponent2 from "../components/AbountComponent2";
import HomeComponent1 from "../components/HomeComponent1";
import AboutComponent3 from "../components/AboutComponent3";
import HomeComponent7 from "../components/HomeComponent7";
import HomeComponent4 from "../components/HomeComponent4";
import AboutHead from "../components/AboutHead ";
import Head from "../components/Head";
import Gallery from "../components/Gallery";
import Image3 from "../images/image3.jpg";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image4 from "../images/image4.jpg";
import Image5 from "../images/image5.jpg";
import Image6 from "../images/image6.jpg";
import Image7 from "../images/image7.jpg";

function About() {
  const imageGallery = [
    {
      Image: Image3,
    },
    {
      Image: Image2,
    },
    {
      Image: Image1,
    },
    {
      Image: Image4,
    },
    {
      Image: Image5,
    },
    {
      Image: Image6,
    },
    {
      Image: Image7,
    },
    {
      Image: Image3,
    },
    {
      Image: Image2,
    },
    {
      Image: Image1,
    },
    {
      Image: Image4,
    },
    {
      Image: Image5,
    },
    {
      Image: Image6,
    },
    {
      Image: Image7,
    },
      {
      Image: Image4,
    },
    {
      Image: Image5,
    },
    {
      Image: Image6,
    },
    {
      Image: Image7,
    }
    
  ];
  return (
    <div>
      <Head />
      <AboutHead />
      <AboutComponent2 />
      <HomeComponent4 />
      <AboutComponent3 />
      <div className=" h-[140vh] w-full mb-2">
        <div className="bg-cyan-950 h-1/4 w-full rounded-b-2xl flex items-center justify-center">
          <div className=" h-full w-1/2 flex flex-col items-center justify-center text-[50px] text-white">
            <p>Gallery</p>
            <div className="bg-white h-2 w-11 rounded-2xl"></div>
          </div>
        </div>
        <div className="h-[10vh] w-full mt-[-5vh] flex justify-center ">
          <div className="bg-cyan-950 h-full w-[10vh] rotate-45 "></div>
        </div>
        <div className=" h-[90vh] w-full mt-4 flex items-center justify-between ">
          <div className=" p-2 flex flex-wrap justify-between ">
            {imageGallery.map(({ Image }) => (
              <img
                src={Image}
                alt="Gallery Image"
                className="h-[30vh] w-[30vh] object-cover rounded-3xl p-4 shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
      <HomeComponent7 />
    </div>
  );
}

export default About;
