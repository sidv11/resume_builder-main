import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar/NavigationBar";
import ResumeTemplates from "./Pages/ResumeTemplates";
import AboutUs from "./Pages/AboutUs";
import DetailsFillng from "./Pages/DetailsFillng";
import Preview from "./Components/Preview/Preview";
import MyResumes from "./Pages/MyResumes";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Preview" element={<Preview />} />
        <Route path="/ResumeTemplates" element={<ResumeTemplates />} />
        <Route path="/MyResumes" element={<MyResumes />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/DetailsFillng" element={<DetailsFillng />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
