import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Bio from "./components/Bio";

import { Audio } from "react-loader-spinner";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import EducationSection from "./components/EducationSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
<Audio height="80" width="80" color="green" ariaLabel="loading" />;

export default function App() {
  return (
    <div className="relative min-h-screen overflow-y-auto antialiased">
      <HelmetProvider>
        <title>Srinivas Kommirisetty's Portfolio</title>
        <meta name="description" content="Description of my component" />
      </HelmetProvider>
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img" />
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Suspense fallback={<Audio height={80} width={80} />}>
          <NavBar />
          <Hero />
          <Projects />
          <Bio />
          <Skills />
          <Certifications />
          <WorkExperience />
          <EducationSection />
          <ContactForm />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
