import { NavLink, Outlet } from "react-router-dom";
import Topbar from "../views/global/Topbar";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Topbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
