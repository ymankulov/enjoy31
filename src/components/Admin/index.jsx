import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/reducers/adminSlice";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const adminCreate = () => {
    if (userPass === "555") {
      let newAdmin = {
        id: 1,
        name: userName,
        password: userPass,
      };
      dispatch(createUser(newAdmin));
      setUserName("");
      setUserPass("");
      navigate("/");
    } else {
      alert(404);
      setUserName("");
      setUserPass("");
    }
  };

  return (
    <div className="mt-[100px]">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-10 w-[45%] mx-auto">
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              type="text"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setUserPass(e.target.value)}
              value={userPass}
              type="password"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Password
            </label>
          </div>
          <button
            onClick={() => adminCreate()}
            className="text-[25px] py-[10px] px-[35px] bg-white text-black font-bold rounded-2xl"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
