import { Outlet } from 'react-router-dom';

import Header from './Header';

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="w-screen min-h-screen pt-10 bg-white md:max-w-3xl md:mx-auto sm:pt-16">
        <Outlet />
      </main>
    </>
  );
}
