import { MdOutlineHome, MdOutlineShoppingCart } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="w-screen absolute top-0 left-0 bg-background">
      <div className="max-w-3xl h-16 mx-auto flex items-center">
        <div className="flex ml-auto space-x-4">
          {location.pathname !== "/" && (
            <Link to="/">
              <MdOutlineHome className="w-8 h-8" />
            </Link>
          )}
          {location.pathname !== "/cart" && (
            <Link to="/cart">
              <MdOutlineShoppingCart className="w-8 h-8" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
