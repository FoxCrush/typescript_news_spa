import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { createHashRouter, RouterProvider } from "react-router-dom"; //HashRouter for GitHub Pages. Should be BrowserRouter otherwise
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Main from "./routes/main-view";
import Article from "./routes/article-view";
import NotFoundView from "./routes/not-found-view";
import "@fontsource/montserrat";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "serif"].join(","),
  },
});

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "*",
    element: <NotFoundView />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
