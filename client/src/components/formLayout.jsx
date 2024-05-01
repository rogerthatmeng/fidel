import React from "react";

const FormLayout = ({ children, handleSubmit, title, subTitle }) => {
  return (
    <div className="w-full grid place-items-center my-[15vh] px-4">
      <form
        onSubmit={handleSubmit}
        className="form w-full max-w-[450px] mx-auto p-8 bg-white rounded-lg border border-[#ccc]"
      >
        <h1 className="mb-6 font-semibold text-2xl">{title}</h1>
        {subTitle && <p className="mb-4 text-sm">{subTitle}</p>}

        <div>{children}</div>
      </form>
      <div className="text-sm font-semibold mt-8 text-center">
        New to Fidelity? <span className="underline">Open an account</span> or{" "}
        <span className="underline">sign up</span>.
      </div>
    </div>
  );
};

export default FormLayout;
