import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="" />
          </figure>
          <div className="card-body">
            <div className="container">
              <div className="row mt-3">
                <div className="col-6">
                  <h2 className="card-title">
                      {item.name}
                  </h2>
                </div>
                <div className="col-6">
                  <div className="btn-cat">{item.category}</div>
                </div>
              </div>
            </div>
            {/* <h2 className="card-title">
              {item.name}
              <div className="btn-cat">{item.category}</div>
            </h2> */}
            <p>{item.description}</p>
            <div className="card-actions justify-between">
              {/* <div className="badge badge-outline">${item.price}</div> */}
              {/* <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
