import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login } from './pages';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
