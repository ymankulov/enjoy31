import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((s) => s.admin);
  const navigate = useNavigate();

  const navPro = () => {
    if (!user.name) {
      alert(404);
    } else {
      navigate(`/product`);
    }
  };

  return (
    <div className="py-[35px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="flex items-center gap-[200px] border-2 border-solid border-white py-[9px] px-[30px] rounded-[20px]">
            <div className="text-white text-2xl font-bold flex items-center gap-10">
              <Link to={"/"}>Home</Link>
              <a onClick={() => navPro()}>Product</a>
              <Link to={"/"}>Help Centre</Link>
            </div>
            <div className="flex items-center gap-5">
              <h2
                onClick={() => navigate(`/profile`)}
                className="text-[25px] text-white font-bold"
              >
                {user.name}
              </h2>
              <a
                onClick={() => navigate("/admin")}
                className="text-white text-3xl"
              >
                <FaRegUserCircle />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a className="text-white text-[35px]">
              <IoSearch />
            </a>
            <a className="text-white text-[35px]">
              <AiOutlineShoppingCart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
