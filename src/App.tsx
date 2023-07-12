import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<div>Home page</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
