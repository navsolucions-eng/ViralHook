import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import GeneratorPage from "./pages/GeneratorPage";
import History from "./components/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<GeneratorPage />} />

      {/* NUEVA RUTA */}
      <Route path="/app/history" element={<History />} />
    </Routes>
  );
}

export default App;