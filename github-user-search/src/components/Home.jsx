import React from "react";
import Search from "./search";

const Home = () => {
  return (
    <>
      <main className="flex flex-col justify-start items-center w-svw h-svh">
        <h1 className="text-red-700 mt-9 text-7xl mb-15">GitHub User Search</h1>
        <Search />
      </main>
    </>
  );
};

export default Home;
