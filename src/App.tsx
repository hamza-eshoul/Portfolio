import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import RootLayout from "@/components/RootLayout";

import Navbar from "@/features/navigation/Navbar";
import Footer from "@/components/Footer";

// sections
import Hero from "@/features/hero/Hero";
import AboutMe from "@/features/about/AboutMe";
import Skills from "@/features/skills/Skills";
import Projects from "@/features/projects/Projects";
import NoteworthyProjects from "@/features/projects/NoteworthyProjects";
import Contact from "@/features/contact/Contact";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <RootLayout>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <NoteworthyProjects />
        <Contact />
        <Footer />
      </RootLayout>
    </I18nextProvider>
  );
};

export default App;
