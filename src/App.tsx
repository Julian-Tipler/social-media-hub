import {
  createBrowserRouter,
  LoaderFunctionArgs,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./views/home/Home";
import { SidebarLayout } from "./layouts/SidebarLayout";
import { Post } from "./views/post/Post";
import { LoginPage } from "./views/auth/LoginPage";

const App = () => {
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      // loader() {
      //   // Our root route always provides the user, if logged in
      //   return { user: fakeAuthProvider.username };
      // },
      children: [
        {
          path: "login",
          loader: () => {
            const loggedIn = true;
            if (loggedIn) {
              return redirect("/");
            }
            return null;
          },
          element: <LoginPage />,
          // action possibly to be used for redirecting to home if logged in
        },
        {
          path: "splash",
          element: <div>splash</div>,
        },
        {
          path: "/",
          loader: protectedLoader,
          element: <SidebarLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "post",
              element: <Post />,
            },
          ],
        },
        {
          path: "*",
          element: <div>404</div>,
        },
      ],
    },
    {
      path: "/logout",
      action: () => {
        // await fakeAuthProvider.signout();
        return redirect("/login");
      },
    },
  ]);
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default App;

function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication

  const authorized = true;
  // something like this: const session = supabase.auth.session();
  if (!authorized) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  return null;
}
