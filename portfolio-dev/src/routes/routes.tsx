import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectOneArch from "../components/Architectures/ProjectOneArch";
import ProjectTwoArch from "../components/Architectures/ProjectTwoArch";
import ProjectThreeArch from "../components/Architectures/ProjectThreeArch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projectOneArch",
    element: <ProjectOneArch />,
  },
  {
    path: "/projectTwoArch",
    element: <ProjectTwoArch />,
  },
  {
    path: "/projectThreeArch",
    element: <ProjectThreeArch />,
  },
]);

export default router;
