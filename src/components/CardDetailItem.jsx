import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CardSlice";
const CardDetailItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCard = () => {
    dispatch(remove(item?.id));
  };

  const sortDescriptions = (str) => {
    if (!str) return str;

    return str.split(" ").slice(0, 20).join(" ") + "...";
  };

  const sortTitle = (str) => {
    return str.split(" ").slice(0, 6).join(" ") + "...";
  };

  return (
    <div className="flex border w-full rounded-lg overflow-hidden p-3 space-x-3 border-gray-200 shadow-[0px_1px_5px_1px_rgba(0,_0,_0,_0.1)]">
      <div className="w-[60%] h-[100%]">
        <img
          src={item?.image}
          alt="Image"
          className="w-full h-full object-center "
        />
      </div>
      <div className="space-y-1.5 w-full">
        <h2 className="font-bold text-xs sm:text-base">{sortTitle(item?.title)}</h2>
        <p className="text-xs sm:text-sm">{ sortDescriptions(item?.description)}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold  text-xs sm:text-base text-green-500"> ${item?.price}</span>
          <MdDelete onClick={removeFromCard} className="cursor-pointer text-red-500 size-4 sm:size-8" />
        </div>
      </div>
    </div>
  );
};

export default CardDetailItem;
