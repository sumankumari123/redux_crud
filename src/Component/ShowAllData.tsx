import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../apps/hooks";
import { fetchProducts } from "../features/CardReducer";
import CardSkeleton from "./commun/CardSkeleton";
import ErrorPage from "./commun/ErrorPage";
import { Tooltip } from "@mui/material";

const ShowAllData = () => {
  const { productList, loading, error } = useAppSelector(
    (state) => state.cardData
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-6">Data List</h2>
      {error ? (
        <>
          <ErrorPage />
        </>
      ) : loading ? (
        [...Array(10)].map((_, index) => (
          <div key={index}>
            <CardSkeleton />
          </div>
        ))
      ) : productList && productList.length >= 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
            {productList.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col h-[18rem]"
              >
                <p className={`mt-2 `}>ID: {item.id}</p>
                <h3 className="text-lg font-semibold">
                  User Title: {item.title}
                </h3>
                <p className={`mt-2 `}>User Id: {item.userId}</p>
                <p className={`mt-2 `}>Completed: {item.completed}</p>

                <div className="mt-auto flex justify-around">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                    <Tooltip title="Edit comming soon" placement="top">
                      <span className=" text-sm  ">Edit</span>
                    </Tooltip>
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    <Tooltip title="Delete comming soon" placement="top">
                      <span className=" text-sm  ">Delete</span>
                    </Tooltip>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShowAllData;
