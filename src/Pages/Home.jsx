import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import ShoppingCard from "../components/ShoppingCard";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchProductData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setPosts(result);
    } catch (error) {
      setPosts([]);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Spinner />
        ) : posts?.length > 0 ? (
          <div className="w-full grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[80%] mx-auto pt-20 pb-5 gap-5 font-robotor">
            {posts?.map((item, index) => (
              <ShoppingCard key={index} CardItem={item} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Home;
