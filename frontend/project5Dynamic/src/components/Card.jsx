import React from "react";
import "../App.css";

export default function Card(prop) {
  console.log(prop.product);
  const item = prop.product;

  return (
    <div className="w-1/3">
      <div className="p-5 ">
        <div className="card">
          <div className="bg p-5">
            <img className="w-[300px] aspect-square mx-auto" src={item.image} alt="" />
            <h4 className="text-2xl my-4 ">{item.title}</h4>
            <div className="flex justify-between mb-5">
              <span className=" text-green-700 text-3xl ">${item.price}</span>
              <button className="bg-blue-400 rounded px-5 py-2 text-white">Add to Cart</button>
            </div>
            <div className="flex justify-between mb-5">
              <span className=" text-xl me-5">Rating {item.rating.rate}</span>
              <span>
                By <span className="text-xl text-blue-800">{item.rating.count}</span> People
              </span>
            </div>
            <span className="text-xl">More Details About Products</span>
            <p className="text-lg text-gray-600">{item.description}</p>
          </div>
          <div className="blob"></div>
        </div>
      </div>
    </div>
  );
}
