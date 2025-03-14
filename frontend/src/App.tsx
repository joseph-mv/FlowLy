import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Workspace from "./pages/WorkSpace";
import Layout from "./components/layout/Layout";
import WorkflowList from "./pages/WorkFlowList";
import { ToastContainer } from "react-toastify";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Auth />} />
          <Route path="/workspace" element={<Workspace />} />

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
