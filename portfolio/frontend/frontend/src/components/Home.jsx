// src/components/Home.js
import React from 'react';
import { Box, Container, Heading, Text, Button, useColorModeValue, Fade, ScaleFade, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to My Portfolio
        </Heading>
        <Box class="social-icons">
                <a href="mailto:amritpalsingh9599123@gmail.com" target="_blank" class="icon"><i class="fas fa-envelope"></i></a>
                <a href="https://github.com/Amrit-786" target="_blank" class="icon"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/amrit-pal-singh-18a072252" target="_blank" class="icon"><i class="fab fa-linkedin"></i></a>
            </Box>
        <Text fontSize="lg" mb={6}>
          I am a Full Stack Developer with a passion for creating beautiful and functional web applications.
        </Text>
        <Fade in={true}>
          <MotionBox
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            mb={4}
          >
            <Image
              src="https://via.placeholder.com/400x200"
              alt="Portfolio"
              borderRadius="md"
            />
          </MotionBox>
        </Fade>
        <Button colorScheme="teal" size="lg">
          Learn More
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
