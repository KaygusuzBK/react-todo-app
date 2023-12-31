import { createBrowserRouter } from "react-router-dom";
import Tasks from "~/pages/Home/index.jsx";
import AddTask from "~/pages/AddTask/AddTask.jsx";
import EditTask from "~/pages/EditTask/EditTask.jsx";
import CompletedTasks from "~/pages/CompletedTask/CompletedTask.jsx";
import Layout from "~/Layout/index.jsx";
import "~/assets/css/main.css";

// layout kullanmamızın sebebi içerisindeki componentler değişirken diğer componentler değişmeyecektir.
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/task-add",
        element: <AddTask />,
      },
      {
        path: "/task-edit/:id",
        element: <EditTask />,
      },
      {
        path: "/completed-tasks",
        element: <CompletedTasks />,
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

export default routes;
