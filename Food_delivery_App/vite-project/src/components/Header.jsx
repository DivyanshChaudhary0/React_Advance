import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-[85%] mx-auto py-4 flex items-center justify-between">
        <div className="w-16 h-16">
          <img className="w-full h-full rounded-full" src="https://imgs.search.brave.com/uMcwp2mM7bKeFohVT6Iz9y6qZQuKy_VffrC5CJY0KYM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vNGZhODBj/ZTQwNmJiODliNjdl/ZDUwOTBjZjQ3N2Uy/ZWViODllMDM5NC0z/Nzd4Mzg2LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw" alt="" />
        </div>
        <div className="flex items-center gap-12 font-semibold">
            <Link to="/"> Home </Link>
            <Link to="/about"> About us </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/cart"> Cart </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
