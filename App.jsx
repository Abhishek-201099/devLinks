import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import CustomizeProfile from "./pages/CustomizeProfile";
import Preview from "./pages/Preview";
import ProfileDetails from "./pages/ProfileDetails";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/customize" replace />,
      },
      {
        path: "/customize",
        element: <CustomizeProfile />,
      },
      {
        path: "/settings",
        element: <ProfileDetails />,
      },
    ],
  },
  {
    path: "/preview",
    element: <Preview />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
