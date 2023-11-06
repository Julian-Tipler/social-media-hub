import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SidebarLayout } from "./layouts/SidebarLayout";
import { Card } from "@chakra-ui/react";
import { Post } from "./views/Post/Post";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<SidebarLayout />}>
        <Route index element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
