import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import Dividor from "./components/Dividor/Dividor";
import About from "./components/About/About";
import Trainers from "./components/Trainers/Trainers";
import Membership from "./components/Membership/Membership";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import "./index.css"


function App(){
    return <>
        <Navbar/>
        <Home/>
        {/* <Dividor/> */}
        <About/>
        <Trainers/>
        <Membership/>
        <Testimonials/>
        <Footer/>

    </>
}


export default App;