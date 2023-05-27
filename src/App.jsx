import Header from "./components/Header";
import Intro from "./components/Intro";
import Info from "./components/Info";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-white text-sm font-open-sans">
      <div className="bg-dark-blue-2 px-5">
        <Header />
        <Intro />
        <Info />
        <About />
        <Testimonial />
        <SignUp />
      </div>

      <Footer />
    </div>
  );
}
