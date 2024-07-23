import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";

import "./App.css";
import RootPage from "./pages/RootPage";
import FullBoardPage from "./pages/FullBoardPage";
import DetailPostPage from "./pages/DetailPostPage";
import CategoryPage from "./pages/CategoryPage";
import GlassPage from "./pages/GlassPage";
import SearchedPage from "./pages/SearchedPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          path: "/",
          element: <FullBoardPage />,
        },
        {
          path: "category",
          element: <CategoryPage />,
        },
        {
          path: "glass",
          element: <GlassPage />,
        },
        {
          path: "search",
          element: <SearchedPage />,
        },
        {
          path: "detail",
          element: <DetailPostPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <SignupPage />,
        },
      ],
      errorElement: <div>Not Found</div>,
    },
  ]);

  return (
    <div className="App">
      <AuthContextProvider>
        <RouterProvider router={BrowserRouter}></RouterProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
