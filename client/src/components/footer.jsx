import React from "react";

const Footer = () => {
  return (
    <div className="p-4 text-sm md:text-xs">
      <div className="max-w-[900px]">
        <p>National Financial Services LLC Statement of Financial Condition</p>
        <p>
          Use of this site involves the electronic transmission of personal
          financial information. Using this product is consent to such
          transmission of this information; such consent is effective at all
          times when using this site. Fidelity supports 128-bit browser
          encryption . Usage of Fidelity's online trading services constitutes
          agreement of the Electronic Services Customer Agreement and License
          Agreement.
        </p>
        <p>
          Before investing, consider the funds' investment objectives, risks,
          charges, and expenses. Contact Fidelity for a prospectus or, if
          available, a summary prospectus containing this information. Read it
          carefully.
        </p>
        <p>
          Fidelity Brokerage Services LLC, Member NYSE, SIPC. 900 Salem Street,
          Smithfield, RI 02917
        </p>
      </div>
      <div className="flex justify-between max-md:flex-wrap gap-6">
        <p>
          ©1998-2024 FMR LLC. All Rights Reserved. <br /> 844672.6.0
        </p>
        <div>
          <div className="flex items-center gap-6 max-md:flex-wrap">
            <span>Terms of use</span>
            <span>Privacy</span>
            <span>Security</span>
            <span>Accessibility</span>
          </div>
          <p className="mt-6">
            This is for persons in the US onlyOpens in a new window
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
