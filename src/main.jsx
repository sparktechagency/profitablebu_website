import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { router } from "./routes/Routes.jsx";
import { store } from "./Pages/redux/store.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Provider store={store}>
      <RouterProvider router={router} />
      {/* <Toaster position="top-right" richColors /> */}
    </Provider>
  </StrictMode>,
);
