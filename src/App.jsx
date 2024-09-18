import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme.provider";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Job from "./pages/Job";
import JobListing from "./pages/JobListing";
import MyJobs from "./pages/MyJobs";
import OnBoarding from "./pages/OnBoarding";
import PostJob from "./pages/PostJob";
import SavedJobs from "./pages/SavedJobs";
import { useState } from "react";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/job/:id",
        element: <ProtectedRoutes>
          <Job />
        </ProtectedRoutes>,
      },
      {
        path: "/jobs",
        element: <ProtectedRoutes>
          <JobListing />
        </ProtectedRoutes>,
      },
      {
        path: "/my-jobs",
        element: <ProtectedRoutes>
          <MyJobs />
        </ProtectedRoutes>,
      },
      {
        path: "/onboarding",
        element: <ProtectedRoutes>
          <OnBoarding />
        </ProtectedRoutes>,
      },
      {
        path: "/post-jobs",
        element: <ProtectedRoutes>
          <PostJob />
        </ProtectedRoutes>
      },
      {
        path: "/savedjobs",
        element: <ProtectedRoutes>
          <SavedJobs />,
        </ProtectedRoutes>
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
