import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import AboutUs from "../../components/AboutUs";
import Events from "../../components/Events";
import Header from "../../components/Header";
import Initial from "../../components/Initial";
import Partners from "../../components/Partners";
import { THEME } from "../../styles/Theme";
import HowToHelp from "../../components/HowToHelp";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Header />
      <Scroll style={{ scaleX: scrollYProgress }} />
      <Initial />
      <Events />
      <AboutUs />
      <Partners />
      <HowToHelp />
      <ContactUs />
      <Footer />
    </>
  );
}

const Scroll = styled(motion.div)`
  position: fixed;
  top: 100;
  left: 0;
  right: 0;
  height: 1.5rem;
  background: ${THEME.LINEAR};
  transform-origin: 0%;
  z-index: 20;
`;
