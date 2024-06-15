// import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/ChinmayKaitade")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // });

  return (
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-4xl">
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} alt="git profile" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ChinmayKaitade");
  return response.json();
};
