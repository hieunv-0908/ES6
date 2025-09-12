import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./page/About";
import Contact from "./page/Contact";
import AppDefault from "./page/AppDefault";
import Products from "./page/Products";
import ProductList from "./component.tsx/ProductList";
import Tasks from "./page/Tasks";
import TaskList from "./component.tsx/TaskList";
import ProductDetail from "./component.tsx/ProductDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <AppDefault /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            {
                path: 'products',
                element: <Products />,
                children: [
                    { index: true, element: <ProductList /> }
                    ,{path:':id',element:<ProductDetail></ProductDetail>}
                ]
            },
            {
                path: 'tasks',
                element: <Tasks />,
                children: [
                    { index: true, element: <TaskList /> }
                ]
            }
        ]
    }
]);
