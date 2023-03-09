import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login, NotFound } from './pages';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
