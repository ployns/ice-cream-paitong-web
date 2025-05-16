import React from "react";
import Cover from "../../assets/cover.jpg";
import fbLogo from "../../assets/contact/facebook.png";
import lineLogo from "../../assets/contact/line.png";
import telLogo from "../../assets/contact/tel.png";

const listContact = [
  {
    title: "ไอศกรีมไผ่ทอง สาขาประชาชื่น 2",
    icon: fbLogo,
  },
  {
    title: "@icecreampaitong",
    icon: lineLogo,
  },
  {
    title: "086-3836984",
    icon: telLogo,
  },
];

function TitalHeader() {
  return (
      <div className="relative w-full h-[960px] overflow-hidden">
        <img
          src={Cover}
          alt="Example"
          className="w-full h-auto opacity-60 object-cover object-center"
        />
     
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-90 rounded-[48px] px-8 py-12 flex flex-col items-center shadow-lg max-w-4xl w-full mx-4">
          <h1 className="text-5xl text-amber-950 font-bold text-center mb-4">
            ไอศกรีมไผ่ทอง สาขาประชาชื่น
          </h1>
          <div className="flex flex-wrap gap-4 justify-center items-center text-xl font-semibold">
            {listContact.map((item) => (
              <span className="flex items-center gap-2">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      </div>
  );
}

export default TitalHeader;
