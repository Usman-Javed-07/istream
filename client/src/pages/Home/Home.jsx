import React from "react";
import Header from "../../components/layouts/Header";
import Card from "../../components/cards/Card";

function Home() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto"> 
        <Header />
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
                     xl:px-28"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
