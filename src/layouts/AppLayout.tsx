import { Outlet } from "react-router-dom";

import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="max-w-3xl min-h-screen pt-16 mx-auto bg-white">
        <Outlet />
      </main>
    </>
  );
}
