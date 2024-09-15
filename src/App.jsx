import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme.provider";
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
        element: <Job />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/onboarding",
        element: <OnBoarding />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/savedjobs",
        element: <SavedJobs />,
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
