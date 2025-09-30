import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Honors from './components/Honors';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Honors />
      <Recommendations />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
