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

const Hero = lazy(() => import("../Pages/Hero"));
const About = lazy(() => import("../Pages/About"));
const Projects = lazy(() => import("../Pages/Projects"));
const Skills = lazy(() => import("../Pages/Skills"));
const Contact = lazy(() => import("../Pages/Contact"));

import NavBar from "../Components/nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading Projects...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading Skills...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default App;
