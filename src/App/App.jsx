/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: App.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/
import { Suspense, lazy } from "react";
import NavBar from "../Components/nav/NavBar";
import Loader from "../Components/Loader";

const Hero = lazy(() => import("../Pages/Hero"));
const About = lazy(() => import("../Pages/About"));
const Projects = lazy(() => import("../Pages/Projects"));
const Skills = lazy(() => import("../Pages/Skills"));
const Contact = lazy(() => import("../Pages/Contact"));

function AppContent() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AppContent />
    </Suspense>
  );
}

export default App;
