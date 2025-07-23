import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CardSlice";

const ShoppingCard = ({ CardItem }) => {
  const Card = useSelector((state) => state.Card);
  const dispatch = useDispatch();
  const addToCard = () => {
    dispatch(add(CardItem));
  };

  const removeFromCard = () => {
    dispatch(remove(CardItem?.id));
  };

  const sortDescriptions = (str) => {
    if (!str) return str;

    if (str.length < 40) return str;

    return str.split(" ").slice(0, 10).join(" ") + "...";
  };

  const sortTitle = (str) => {
    return str.split(" ").slice(0, 6).join(" ") + "...";
  };

  return (
    <>
      <div className="w-full max-w-65 flex flex-col justify-between rounded-lg px-3 py-3 border border-gray-200 shadow-[0px_1px_5px_1px_rgba(0,_0,_0,_0.1)]
       hover:scale-105 transition duration-300 ease-in">
        <div className="w-full px-4 space-y-3">
          <h3 className="text-[17px] font-semibold">
            {sortTitle(CardItem?.title) || "--"}
          </h3>
          <p className="text-sm">
            {sortDescriptions(CardItem?.description) || "--"}
          </p>
          <div className="w-full h-44 overflow-hidden">
            <img
              src={CardItem?.image}
              alt="Image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex justify-between mt-3.5">
          <span className="text-base font-semibold text-green-600">
            ${`${CardItem?.price}`}
          </span>
          {!Card?.some((p) => p.id === CardItem?.id) ? (
            <button
              className="border border-black text-xs px-2.5 py-1 rounded-xl cursor-pointer font-bold hover:scale-105 transition duration-300 ease-in"
              onClick={addToCard}
            >
              ADD TO CARD
            </button>
          ) : (
            <button
              className="border border-black text-xs px-2.5 py-1 rounded-xl cursor-pointer font-bold hover:scale-105 transition duration-300 ease-in"
              onClick={removeFromCard}
            >
              REMOVE TO CARD
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
