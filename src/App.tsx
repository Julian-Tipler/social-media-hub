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
import { SignupPage } from "./views/auth/SignupPage";

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
            const loggedIn = false;
            if (loggedIn) {
              return redirect("/");
            }
            return null;
          },
          action: loginAction,
          element: <LoginPage />,
          // action possibly to be used for redirecting to home if logged in
        },
        {
          path: "signup",
          loader: () => {
            const loggedIn = false;
            if (loggedIn) {
              return redirect("/");
            }
            return null;
          },
          action: signupAction,
          element: <SignupPage />,
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

async function loginAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  // Validate our form inputs and return validation errors via useActionData()
  if (!username) {
    return {
      error: "You must provide a username to log in",
    };
  }
  if (!password) {
    return {
      error: "You must provide a password to log in",
    };
  }
  // Sign in and redirect to the proper destination if successful.
  try {
    // await fakeAuthProvider.signin(username);
    console.log("hello");
  } catch (error) {
    // Unused as of now but this is how you would handle invalid
    // username/password combinations - just like validating the inputs
    // above
    return {
      error: "Invalid login attempt",
    };
  }

  const redirectTo = formData.get("redirectTo") as string | null;
  return redirect(redirectTo || "/");
}

async function signupAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  // Validate form inputs and handle errors similarly to the loginAction
  if (!email || !password) {
    return {
      error: "You must provide both email and password to create an account",
    };
  }

  try {
    // Here you would add your logic to create a new user account
    // e.g., await supabase.auth.signUp({ email, password });
    console.log("Account created for:", email);
    // Redirect to login or directly log the user in and redirect to home
  } catch (error) {
    return {
      error: "Error creating account",
    };
  }

  // Decide where to redirect after successful signup
  return redirect("/"); // You might want to redirect to '/login' or elsewhere
}
