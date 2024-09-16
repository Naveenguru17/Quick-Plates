import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlintStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-green-100 shadow-lg mb-2">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <img className="w-32" src={LOGO_URL} alt="Logo" />

        {/* Menu button for small screens */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776; {/* This is the "hamburger" menu icon */}
        </button>

        {/* Links for medium and large screens */}
        <nav className="hidden md:flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About us</Link>
            </li>
            <li className="px-4">
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Links for small screens, conditionally rendered */}
      {isMenuOpen && (
        <nav className="md:hidden bg-green-100">
          <ul className="flex flex-col items-center p-4">
            <li className="px-4 py-2">Online Status: {onlineStatus ? "✅" : "❌"}</li>
            <li className="px-4 py-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About us</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart ({cartItems.length})</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
