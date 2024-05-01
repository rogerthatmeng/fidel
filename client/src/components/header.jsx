import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white w-full px-3 py-4 flex items-center justify-between">
      <Link to="/">
        <img
          src="https://digital.fidelity.com/stgw/digital/login/dist/Fidelity-wordmark.svg"
          alt="fidelity"
          width={116}
        />
      </Link>
      <div className="max-md-hidden flex items-center gap-6 ">
        <span>Security</span>
        <span>FAQs</span>
      </div>
    </div>
  );
};

export default Header;
