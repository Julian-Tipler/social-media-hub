import { Outlet } from "react-router-dom";
import Topbar from "../views/global/Topbar";
import { Sidebar } from "../views/global/Sidebar";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Topbar />
      </header>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
