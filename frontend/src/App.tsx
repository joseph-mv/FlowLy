import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { Auth, Home, WorkflowList, Workspace }  from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* Toast notifications for alerts and messages */}
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Auth />} />
          <Route path="/workspace" element={<Workspace />} />

          {/* Protected Routes (Only accessible by authenticated users) */}
          <Route
            path="/works-flow-list"
            element={
              <ProtectedRoute>
                <WorkflowList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/works-flow-list/:id/edit-workflow"
            element={
              <ProtectedRoute>
                <Workspace />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
