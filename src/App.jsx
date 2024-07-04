import { Outlet } from "react-router-dom";
import HomePages from "./pages/HomePages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
  <div className="main-container">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
  )
}

export default App;
