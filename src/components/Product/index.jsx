import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/reducers/productSlice";

const Product = () => {
  const { products } = useSelector((s) => s.products);
  const dispatch = useDispatch();

  const getProducts = () => {
    return async (dispatch) => {
      const res = await axios(`https://fakestoreapi.com/products`);
      const { data } = res;
      console.log(data, "pro");
      dispatch(addProduct(data));
    };
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <div className="container">
        <div className="flex items-start flex-wrap gap-[150px]">
          {products.map((el) => (
            <div className=" w-[300px] h-[590px] bg-white p-[15px] rounded-[20px]">
              <img
                src={el.image}
                alt="img"
                width={200}
                height={250}
                className="ml-[30px]"
              />
              <div className="flex items-center justify-centerw-[300px] h-0.5 bg-black my-[10px]"></div>
              <h1 className="text-[20px] font-medium">{el.title}</h1>
              {/* <p>{el.description}</p> */}
              <h1 className="text-gray-600 py-[15px]">
                {el.category} / {el.rating.count}
              </h1>
              <div className="flex items-center justify-between px-[10px]">
                <h1 className="text-[18px] font-bold">{el.price} c</h1>
                <button className="py-[5px] px-[20px] bg-green-500 rounded-[10px]">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
