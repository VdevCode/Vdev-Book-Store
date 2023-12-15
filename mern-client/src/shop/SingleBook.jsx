import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const {
    _id,
    bookTitle,
    imageURL,
    authorName,
    bookDescription,
    categoryName,
  } = useLoaderData();

  return (
    <div className="mt-28 px-4 lg:px-24 justify-center">
      <div className="md:flex flex-wrap gap-4">
        <div>
          <img src={imageURL} className="h-96" />
        </div>
        <div>
          <h2 className="mt-2 font-medium">{bookTitle}</h2>
          <p className="my-2 font-light text-justify">{bookDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
