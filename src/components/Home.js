import React, { useEffect, useState } from "react";
import Display from "./Display";
import Search from "./Search";
import { data } from "autoprefixer";

const Home = () => {
  const [datas, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=35282912-245903fbacc0924226d86af85&q=${term}&image_type=photo&pretty=true`
    )
      .then((result) => result.json())
      .then((images) => {
        setData(images.hits);
        setLoading(!loading);
      });
  }, [term]);
  return (
    <div>
      <Search searchText={(text) => setTerm(text)} />
      {!loading && data.length == 0 && (
        <div className="h-screen w-screen flex justify-center items-center text-3xl font-bold">
          {" "}
          Error 404...
        </div>
      )}
      (
      <div className="container  ">
        <div className="grid grid-cols-3 mt-5 gap-4 mx-32 ">
          {datas.map((image) => (
            <Display key={image.id} images={image} />
          ))}
        </div>
      </div>
      )
    </div>
  );
};

export default Home;
