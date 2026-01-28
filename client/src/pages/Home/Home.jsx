import React, { useEffect, useState } from "react";
import Header from "../../components/layouts/Header";
import Card from "../../components/cards/Card";
import Loader from "../../components/common/Loader";

function Home() {
    const [loading, setLoading] = useState(true);
    const [,setData] = useState([]);
      useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setData(Array.from({ length: 25 }));
      setLoading(false);
    }, 1500); // 1.5 sec loader
  }, []);
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <Header />

        {loading ? ( <Loader/>) : (
        <div
          className="grid grid-cols-2
                     sm:grid-cols-3
                     md:grid-cols-4
                     lg:grid-cols-4
                     xl:grid-cols-5 
                     gap-2 mx-auto
                     px-5
                     sm:px-5
                     md:px-10
                     lg:px-20
                     xl:px-28
                     "
        >
          {Array.from({ length: 25 }, (_, index) => (
            <Card key={index} />
          ))}
        </div>
        )}
      </div>
    </>
  );
}

export default Home;
