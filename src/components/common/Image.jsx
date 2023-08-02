import React from "react";
import {CLOUDINARY_URL} from "../../utils/constant"
const Image = ({className,imgUrl }) => {

  return (
    <img
      src={`${CLOUDINARY_URL}/${imgUrl}`}
      className={className}
      loading="lazy"
    />
  );
};

export default Image;
