import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom"; //HashRouter for GitHub Pages. Should be BrowserRouter otherwise
import Main from "./routes/main-view";
import Article, { articleLoader } from "./routes/article-view";

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/article",
    element: <Article />,
    loader: articleLoader,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
