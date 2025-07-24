import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardDetailItem from "../components/CardDetailItem";
import { useSelector } from "react-redux";

const CardDetails = () => {
  const Card = useSelector((state) => state.Card);
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
    setTotalAmount(Card?.reduce((acc, curr) => acc + curr?.price, 0));
  }, [Card]);




  return (
    <div className="pt-20 mb-5 w-full h-screen font-roboto">
      {Card?.length>0? (
        <>
          <div className="flex flex-col w-full max-w-[90%] xl:max-w-[70%] mx-auto space-y-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
              {Card?.map((item, index) => (
                <CardDetailItem key={index} item={item} />
              ))}
            </div>
            <div className="w-full rounded-lg border py-4 px-3 mb-12 border-gray-200 shadow-[0px_1px_5px_1px_rgba(0,_0,_0,_0.1)]">
              <div className="flex flex-col justify-center items-center">
                <p className="text-base md:text-xl xl:text-2xl font-medium text-green-500">Your Card Summary</p>

                <div className="w-full mt-6 max-[439px]:flex-col max-[439px]:gap-2 flex items-center justify-between text-xs sm:text-xl font-normal">
                  <p>Total item : {Card?.length}</p>
                  <p>
                    Total Amount : {" "}
                    <span className="font-medium text-green-500">${totalAmount.toFixed(2)}</span>
                  </p>
                  <button className="border border-gray-300 max-[439px]:px-2.5 max-[439px]:py-1.5 sm:px-6 py-0.5 rounded-md font-normal cursor-pointer bg-green-600 text-white hover:bg-green-500">
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-2 text-lg font-bold">
            <p className="text-green-500">Your card is empty.</p>
            <button
              className="px-5 py-1 border rounded-md cursor-pointer text-base font-semibold"
              onClick={() => navigate("/")}
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
