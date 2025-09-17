import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ListTasks from "./components/ListTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ListTasks></ListTasks> }
    ]
  }
]);
