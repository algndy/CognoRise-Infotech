import AppLayout from "./pages/AppLayout";
import { ProjectContext } from "./contexts/ProjectContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/:projectId", element: <Project /> },
      ],
    },
  ]);
  return (
    <ProjectContext>
      <RouterProvider router={router}></RouterProvider>
    </ProjectContext>
  );
}

export default App;
