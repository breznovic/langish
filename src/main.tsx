import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cards from "./components/Cards/Cards.tsx";
import LearningTable from "./components/LearningTable/LearningTable.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/learning",
    element: <LearningTable />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
