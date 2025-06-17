import React from "react";
import { useRef, useState, useEffect } from "react";
const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    // Show password functioanlity
    alert("Show the password");

    if (ref.current.innerText === "Show") {
      // Toggle from show to hide
      ref.current.innerText = "Hide";
      ref.current.classList.add("line-through"); // Add strike line
    } else {
      ref.current.innerText = "Show";
      ref.current.classList.remove("line-through"); // Remove strike line
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(...passwordArray, form);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <div className="mycontainer">
        <h1 className="py-2 border border-white text-4xl font-bold py-2 border border-white text-center">
          <span className="py-2 border border-white text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="py-2 border border-white text-green-500">OP/&gt;</span>
        </h1>
        <p className="py-2 border border-white text-green-700 py-2 border border-white text-lg py-2 border border-white text-center">
          Your own Password Manager
        </p>

        {/* website input */}
        <div className="flex flex-col p-4 py-2 border border-white text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-400 w-full p-4 py-1"
            type="py-2 border border-white text"
            name="site"
            id=""
          />

          {/* username input  */}
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-400 w-full p-4 py-1 "
              type="py-2 border border-white text"
              name="username"
              id=""
            />

            {/* password input  */}
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-400 w-full p-4 py-1 "
                type="py-2 border border-white text"
                name="password"
                id=""
              />
              <span
                className="absolute right-2 border border-white top-1.5 font-bold cursor-pointer"
                onClick={showPassword}
              >
                <span ref={ref}>Show</span>
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-400
          hover:bg-green-300 rounded-full px-4 py-2 border border-white w-fit gap-1 border border-green-500"
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div> No Passwords to Show</div>}
            {passwordArray.length != 0 &&<table class="table-auto w-full rounded-md overflow-hidden">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-2">site</th>
                <th className="py-2">username</th>
                <th className="py-2">password</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item,index) => {
                return <tr key={index}>
                <td className="py-2 border border-white text-center w-32"><a href={item.site} target="_blank">{item.site}</a></td>
                <td className="py-2 border border-white text-center w-32">{item.username}</td>
                <td className="py-2 border border-white text-center w-32">{item.password}</td>
              </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
