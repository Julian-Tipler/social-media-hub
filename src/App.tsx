import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SidebarLayout } from "./layouts/SidebarLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<SidebarLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
