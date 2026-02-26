import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Township from "./components/Township";
import FloorPlan from "./components/FloorPlan";
import AboutDeveloper from "./components/AboutDeveloper";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <About />
          <Township />
          <FloorPlan />
          <AboutDeveloper />
        </>
      ),
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/admin-dashboard",
      element: (
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;