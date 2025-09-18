import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Table from "./components/Table";

export const router = createBrowserRouter([
    {
        path:'/',element:<App></App>,children:[
            {path:'list-post',element:<Table></Table>}
        ]
    }
]);