import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom"; //HashRouter for GitHub Pages. Should be BrowserRouter otherwise
import { store } from "./redux/store";
import { Provider } from "react-redux";
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
