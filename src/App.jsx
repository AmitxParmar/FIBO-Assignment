import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register } from './pages/';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
