import React from "react";

const Input = ({ title, children, ...rest }) => {
  return (
    <div className="w-full relative cursor-pointer">
      <label className="mb-1 block text-sm">{title}</label>
      <input
        type="text"
        className={`px-3 py-2 text-sm bg-[#ffffff] w-full border rounded-lg border-[#888] mb-4`}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
