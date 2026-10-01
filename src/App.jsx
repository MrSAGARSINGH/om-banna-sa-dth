import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CallButton from "./components/CallButton.jsx";

import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.jsx";
import Solar from "./sections/Solar.jsx";
import Brands from "./sections/Brands.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Solar />
        <Brands />
        <Contact />
      </main>

      <Footer />
      <CallButton />
    </>
  );
}