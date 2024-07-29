// src/components/Projects.js
import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, useColorModeValue, Image, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink, FaYoutube } from 'react-icons/fa';

const MotionBox = motion(Box);

const ProjectCard = ({ title, description, image, githubLink, demoLink, youtubeLink }) => (
  <MotionBox
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    p={5}
    borderRadius="md"
    bg={useColorModeValue('gray.100', 'gray.700')}
    boxShadow="md"
    textAlign="center"
  >
    <Image src={image} alt={title} borderRadius="md" mb={4} />
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text mb={4}>{description}</Text>
    <Stack spacing={2} direction="row" justify="center">
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="gray.600" />
        </a>
      )}
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <FaLink size={24} color="teal.500" />
        </a>
      )}
      {youtubeLink && (
        <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} color="red.500" />
        </a>
      )}
    </Stack>
  </MotionBox>
);

const Projects = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        <ProjectCard
          title="Project One"
          description="A brief description of Project One."
          image="https://via.placeholder.com/300x200"
          githubLink="https://github.com/username/project-one"
          demoLink="https://project-one.example.com"
          youtubeLink="https://youtube.com/username/project-one"
        />
        <ProjectCard
          title="Project Two"
          description="A brief description of Project Two."
          image="https://via.placeholder.com/300x200"
          githubLink="https://github.com/username/project-two"
          demoLink="https://project-two.example.com"
          youtubeLink="https://youtube.com/username/project-two"
        />
        <ProjectCard
          title="Project Three"
          description="A brief description of Project Three."
          image="https://via.placeholder.com/300x200"
          githubLink="https://github.com/username/project-three"
          demoLink="https://project-three.example.com"
          youtubeLink="https://youtube.com/username/project-three"
        />
      </SimpleGrid>
    </Container>
  );
}

export default Projects;
