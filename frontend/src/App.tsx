import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home';
import Workspace from "./pages/WorkSpace";
import Layout from './components/layout/Layout';




export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/workspace" element={<Workspace/>} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

