import React from "react"
import { useRef } from "react";
const Manager = () => {
  const ref = useRef();
  const showPassword = () =>{
    alert("Show the password");
   
    if (ref.current.innerText === "Show") {   // Toggle from show to hide  
    ref.current.innerText = "Hide";
    ref.current.classList.add("line-through");   // Add strike line
  } else {
    ref.current.innerText = "Show";
    ref.current.classList.remove("line-through"); // Remove strike line
  }

  }
  return (
    <>

    <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-700 text-lg text-center">
          Your own Password Manager
        </p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input placeholder="Enter website URL"
            className="rounded-full border border-green-400 w-full p-4 py-1"
            type="text"
            name=""
            id=""/>

          <div className="flex w-full justify-between gap-8">
            <input placeholder="Enter Username"
              className="rounded-full border border-green-400 w-full p-4 py-1 "
              type="text"
              name=""
              id=""/>

            <div className="relative">
            <input placeholder="Enter Password"
              className="rounded-full border border-green-400 w-full p-4 py-1 "
              type="text"
              name=""
              id=""/>
              <span className="absolute right-2 top-1.5 font-bold cursor-pointer " onClick={showPassword}>
                <span ref={ref}>Show</span>
           </span>
             </div>

          </div>
          
          <button className="flex justify-center items-center bg-green-400
          hover:bg-green-300 rounded-full px-4 py-2 w-fit gap-1 border border-green-500">
            <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json"trigger="hover">
            </lord-icon>
          Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
