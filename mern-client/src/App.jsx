import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/FooterApp";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
      <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
