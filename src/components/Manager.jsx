import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("🦄 Copy to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    // Show password functioanlity
    passwordRef.current.type = "text";
    if (ref.current.innerText === "Show") {
      // Toggle from show to hide
      ref.current.innerText = "Hide";
      ref.current.classList.add("line-through"); // Add strike line
    } else {
      passwordRef.current.type = "password";
      ref.current.innerText = "Show";
      ref.current.classList.remove("line-through"); // Remove strike line
    }
  };

  const savePassword = () => {
    if (!form.site || !form.username || !form.password) {
    toast.error("❌ Please fill all input fields before saving!", {
      position: "top-right",
      autoClose: 3000,
    });
    return; // Exit early
  }
    setPasswordArray([...passwordArray, {...form, id:uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]));
    setform({site: "", username: "", password: "" })
    console.log(...passwordArray, form);
     toast("❤️Password has saved successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


  
    const editPassword = (id) => {
     console.log("edit pass by id of", id);
     setform(passwordArray.filter(i=>i.id===id)[0])
     setPasswordArray(passwordArray.filter(item=>item.id!==id));
   
  };


    const deletePassword = (id) => {
    console.log("deleting pass by id of", id);
    let c = confirm("Are sure to delet you password")
    if (c) {
      setPasswordArray(passwordArray.filter(item=>item.id!==id));
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)));
      toast("💀Password deletd successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    };
    }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} // ✅ Pass Bounce without quotes
      />
      <ToastContainer/>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

<div className="min-h-[84vh] px-4 py-4 max-w-screen-md mx-auto">
        <h1 className="  text-4xl font-bold py-2 mt-2 border border-white text-center">
          <span className="py-2 border border-white text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="py-2 border border-white text-green-500">
            OP/&gt;
          </span>
        </h1>
        <p className=" b text-green-700  text-lg py-2 border border-white text-center">
          Your own Password Manager
        </p>

        {/* website input */}
        <div className="flex flex-col p-4 py-2 border border-white text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            // className="focus:outline-none rounded-full border border-green-400 w-full p-4 py-1"
             className="focus:outline-none rounded-full border border-green-400 w-full md:w-[130%] p-4 py-1"
            type="text"
            name="site"
            id="site"
          />

          {/* username input  */}
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              // className="focus:outline-none rounded-full border border-green-400 w-full p-4 py-1 "
               className="focus:outline-none rounded-full border border-green-400  w-[140%] p-4 py-1 "
              type="text"
              name="username"
              id="userss"
            />

            {/* password input  */}
            <div className="relative w-60">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="focus:outline-none rounded-full border border-green-400 w-[17vw] p-4 py-1 "
                type="password"
                name="password"
                id="paswrdd"
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
          hover:bg-green-300 rounded-full px-6 py-4 w-fit gap-1 border border-green-500 "
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            <span className="font-bold">
            Save 
            </span>
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div> No Passwords to Show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden ">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-2">site</th>
                  <th className="py-2">username</th>
                  <th className="py-2">password</th>
                  <th className="py-2">delete & edit</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td
                        className=" py-2 border border-white 
                      text-center"
                      >
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="lordiconcopy  size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                with: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/xuoapdes.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center">
                        <div className="flex items-center justify-center ">
                          <span>{item.username}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                with: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/xuoapdes.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center">
                        <div className="flex items-center justify-center">
                          <span>{item.password}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                with: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/xuoapdes.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center">
                        <span className="cursor-pointer mx-2" onClick={()=>{editPassword(item.id)}}>Edit</span>
                        <span className="cursor-pointer" onClick={()=>{deletePassword(item.id)}}>
                          <lord-icon 
                            src="https://cdn.lordicon.com/xyfswyxf.json"
                            trigger="hover"
                            style={{"width":"25px","height":"25px", "paddingLeft":"3px", "paddingTop":"3px"}}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;

{
  /* <lord-icon
    src="https://cdn.lordicon.com/xyfswyxf.json"
    trigger="hover"
    style="width:250px;height:250px">
</lord-icon> */
}

{
  /* <lord-icon
    src="https://cdn.lordicon.com/eqaxvzkf.json"
    trigger="hover"
    style="width:250px;height:250px">
</lord-icon> */
}
