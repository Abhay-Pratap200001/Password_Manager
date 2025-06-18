import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14 ">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-400">&lt;</span>
          <span>Pass</span>
          <span className="text-green-400">OP/&gt;</span>
        </div>

        {/* <ul>
          <li className=" flex gap-4 text-white">
            <a className="hover:font-bold" href="">
              Home
            </a>
            <a className="hover:font-bold" href="">
              About
            </a>
            <a className="hover:font-bold" href="">
              Contact
            </a>
          </li>
        </ul> */}
        
        <a  href="https://github.com/Abhay-Pratap200001/Password_Manager">
        <button className="cursor-pointer text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-white ring-1">
        <img className="w-10 p-1  invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="Github" />
        <span className="font-bolder px-2" >GitHub</span>
        </button>
        </a>
        </div>
    </nav>
  );
};

export default Navbar;
