// src/App.js
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Box, ChakraProvider, Container, Heading } from "@chakra-ui/react";
import Register from './components/Register';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" bg="gray.50" minH="100vh" p={3}>
        <Navbar />
        <Container maxW="container.xl">
          {/* <Heading as="h1" size="2xl" mb={6}>
            Frontend
          </Heading> */}
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
