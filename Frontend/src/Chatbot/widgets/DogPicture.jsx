// new file called DogPicture.jsx
import React, { useEffect, useState } from "react";
import "./common.css";

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} style={{ maxWidth: "200px" }} alt="a dog" />
    </div>
  );
};

export default DogPicture;
