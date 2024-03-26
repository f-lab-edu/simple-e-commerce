import { MdOutlineHome, MdOutlineShoppingCart } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';

export default function Header() {
  const location = useLocation();

  return (
    <header className="w-screen absolute top-0 left-0 bg-background">
      <div className="w-full h-10 mx-auto flex items-center px-5 sm:h-16 md:max-w-3xl">
        <div className="flex ml-auto space-x-4">
          {location.pathname !== ROUTE_PATH.home && (
            <Link to={ROUTE_PATH.home}>
              <MdOutlineHome className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
          )}
          {location.pathname !== ROUTE_PATH.cart && (
            <Link to={ROUTE_PATH.cart}>
              <MdOutlineShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
