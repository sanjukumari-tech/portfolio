// src/components/About.js
import React from 'react';
import { Box, Container, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const About = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        About Me
      </Heading>
      <Stack spacing={4}>
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          p={6}
          borderRadius="md"
          bg={useColorModeValue('gray.100', 'gray.700')}
          boxShadow="md"
        >
          <Text fontSize="lg">
            I am a passionate web developer with experience in building full-stack applications. I love
            exploring new technologies and solving complex problems.
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          p={6}
          borderRadius="md"
          bg={useColorModeValue('gray.100', 'gray.700')}
          boxShadow="md"
        >
          <Text fontSize="lg">
            My skills include JavaScript, React, Node.js, Express, MongoDB, and more. I enjoy creating
            user-friendly interfaces and working on innovative projects.
          </Text>
        </MotionBox>
      </Stack>
    </Container>
  );
}

export default About;
