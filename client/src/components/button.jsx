import React from "react";

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      className={`${className} w-full rounded-lg my-5 px-6 py-2 bg-[#128020] font-[500] text-center text-[#ffffff]`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
