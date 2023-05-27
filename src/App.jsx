import Header from "./components/Header";
import Intro from "./components/Intro";
import Info from "./components/Info";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-96 text-white text-sm p-5 bg-dark-blue-2 font-open-sans">
      <Header />
      <Intro />
      <Info />
      <About />
      <Testimonial />
      <SignUp />
      <Footer />
    </div>
  );
}
