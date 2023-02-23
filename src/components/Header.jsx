import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Header({handleLogout,isLoggedIn}) {

  return (
    <header className="bg-gray-800 p-4  w-full">
      <div className="container flex justify-between items-center">
        <div className="flex gap-6">
          <Link to="/">
            <p className="text-slate-50 text-3xl font-bold  ">Human resource management</p>
          </Link>
        </div>
        {isLoggedIn ? (
          <Link to="/">
          <button
            onClick={() => handleLogout()}
            className="bg-transparent border border-gray-300  py-2 px-3 lg:px-5 font-bold text-gray-100 rounded hover:bg-gray-100 hover:text-gray-900"
          >
            Logout
          </button>
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/login">
              <button className="bg-transparent border border-gray-300  py-2 px-3 lg:px-5 font-bold text-gray-100 rounded hover:bg-gray-100 hover:text-gray-900">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-transparent border border-gray-300  py-2 px-3 lg:px-5 font-bold text-gray-100 rounded hover:bg-gray-100 hover:text-gray-900">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn:PropTypes.bool.isRequired,
};