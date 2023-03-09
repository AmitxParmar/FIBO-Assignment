import { BrowserRouter as Router, Routes, Route, useNavigation, useNavigate } from "react-router-dom";
import { Dashboard, Login, NotFound } from './pages';
import ProtectedRoute from './utils/ProtectedRoute'


function App() {


  return (
    <Router>
      <Routes>
        {/* Protected Dashboard:  */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>}
        />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
