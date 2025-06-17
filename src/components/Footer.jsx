import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center text-2xl h-40 fixed border-0 w-full">
      <div className="logo font-bold text-white text-2xl mb-2">
        <span className="text-green-400">&lt;</span>
        <span>Pass</span>
        <span className="text-green-400">OP/&gt;</span>
      </div>

      <div className="flex justify-center items-center">
        Created 
        <img
          className="w-10 mx-2 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlt-dYBvzxt4eREU6VYG5M1eaUu1pyTbYAhg&s" alt=""/>
        by Abhay_Pratap
      </div>
    </div>
  );
};

export default Footer;
