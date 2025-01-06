import './App.css'
import Navbar from "./Componenets/Navbar/Navbar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Blogs from "./Pages/Blogs.tsx";
import AboutMe from "./Pages/AboutMe.tsx";
import ContactInfo from "./Pages/ContactInfo.tsx";
import Newsletter from "./Pages/Newsletter.tsx";
import FunnyJoke from "./Pages/FunnyJoke.tsx";
import Footer from "./Componenets/Footer/Footer.tsx";
import ScrollToTop from "./Componenets/ScrollToTop.tsx";



function App() {

  return (
    <>
        <BrowserRouter>
            <ScrollToTop/>

            <Navbar/>

            <div className="app-container">

                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/blogs" element={<Blogs/>}/>
                    <Route path="/about_me" element={<AboutMe/>}/>
                    <Route path="/contact_info" element={<ContactInfo/>}/>
                    <Route path="/newsletter" element={<Newsletter/>}/>
                    <Route path="/funny_joke" element={<FunnyJoke/>}/>
                </Routes>

            </div>


        <Footer/>

        </BrowserRouter>
    </>
  )
}

export default App
