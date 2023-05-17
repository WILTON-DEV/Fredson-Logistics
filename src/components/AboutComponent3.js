import React from "react";
import Card4 from "../components/Card4";
import Image3 from "../images/image3.jpg";

function AboutComponent3() {
  const data = [
    {
      name: "Muwonge Lawrence",
      tittle: "Managing Director",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text e",
    },
  ];
  return (
    <div className="h-[100vh] flex flex-col items-center justify-evenly py-8">
      <div className=" w-3/4 flex flex-col items-center justify-center">
              <p className="text-[#be2117]">Our testimonials</p>
      <h3 className="text-[50px] font-extrabold">What they are talking about oxpins</h3>
      </div>
      <div className="flex items-center justify-evenly h-3/4 w-full">
                 <Card4
        name={data[0].name}
        tittle={data[0].tittle}
        text={data[0].text}
        image={Image3}
      />
               <Card4
        name={data[0].name}
        tittle={data[0].tittle}
        text={data[0].text}
        image={Image3}
      />
               <Card4
        name={data[0].name}
        tittle={data[0].tittle}
        text={data[0].text}
        image={Image3}
      />
               <Card4
        name={data[0].name}
        tittle={data[0].tittle}
        text={data[0].text}
        image={Image3}
      />
      
      
      </div>
    </div>
  );
}

export default AboutComponent3;
