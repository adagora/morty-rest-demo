import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharacterAboutComponent } from "./pages/Characters/components/CharacterAboutComponent.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "characters/:id",
    element: <CharacterAboutComponent />
  },
  {
    path: "/",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
