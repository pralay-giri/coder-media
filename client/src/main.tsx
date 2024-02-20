import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./utils/ErrorPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import AppLayout from "./templates/AppLayout.tsx";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore.ts";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <AppLayout />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={appStore}>
            <RouterProvider router={routes} />
        </Provider>
    </React.StrictMode>
);
