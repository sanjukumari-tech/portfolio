// src/components/Resume.js
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  Icon,
  useColorModeValue,
  Flex,
  Image,
} from '@chakra-ui/react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
} from 'react-icons/fa';

const Resume = () => {
  const bg = useColorModeValue('pink.100', 'pink.900');
  const color = useColorModeValue('gray.900', 'gray.100');
  const headingColor = useColorModeValue('teal.600', 'teal.200');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box   p={4}
    borderWidth={1}
    borderRadius="lg"
    bg={bg}
    transition="background-color 0.2s"
    _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}>
    <Container maxW="container.lg" py={8}>
      <Box textAlign="center" mb={10}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="./public/photo.png"
          alt="Sanju Kumari"
          mb={4}
          mx="auto"
        />
        <Heading as="h1" size="2xl" mb={2} color={headingColor}>
          Sanju Kumari
        </Heading>
        <Text fontSize="lg" color={textColor}>
          Full Stack Developer
        </Text>
        <HStack spacing={4} justify="center" mt={2}>
          <HStack spacing={1}>
            <Icon as={FaEnvelope} color="teal.500" />
            <Text color={textColor}>sanju080598@gmail.com</Text>
          </HStack>
          <HStack spacing={1}>
            <Icon as={FaPhone} color="teal.500" />
            <Text color={textColor}>+91 8130533702</Text>
          </HStack>
          <HStack spacing={1}>
            <Icon as={FaMapMarkerAlt} color="teal.500" />
            <Text color={textColor}>Delhi, India</Text>
          </HStack>
        </HStack>
      </Box>

      <Divider mb={8} />

      <VStack align="start" spacing={8}>
        <Box>
          <Heading as="h2" size="lg" mb={4} color={headingColor}>
            Summary
          </Heading>
          <Text fontSize="md" color={textColor}>
            Enthusiastic and detail-oriented Full Stack Developer with hands-on experience in the MERN stack, eager to
            contribute to team success through hard work, attention to detail, and excellent organizational skills.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4} color={headingColor}>
            Skills
          </Heading>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={FaTools} color="teal.500" />
              JavaScript, React, Node.js, Express.js, MongoDB, SQL
            </ListItem>
            <ListItem>
              <ListIcon as={FaTools} color="teal.500" />
              HTML, CSS, Bootstrap, Chakra UI
            </ListItem>
            <ListItem>
              <ListIcon as={FaTools} color="teal.500" />
              Git, GitHub, Agile Methodologies
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4} color={headingColor}>
            Experience
          </Heading>
          <VStack align="start" spacing={4}>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="lg"
              bg={bg}
              transition="background-color 0.2s"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
            >
              <Heading as="h3" size="md" color={headingColor}>
                Full Stack Developer
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Masai | Present
              </Text>
              <Text fontSize="md" color={textColor}>
                <b>Responsibilities:</b>
                <br />• Collaborate with product managers, designers, and other developers to understand project requirements and translate them into functional and scalable web applications.
                <br />• Design and develop efficient server-side APIs using Node.js and Express.js.
                <br />• Implement and maintain the frontend components of our web applications using React.js.
                <br />• Create and optimize database models and queries using MongoDB.
                <br />• Ensure seamless integration between the frontend and backend components of the application.
                <br />• Conduct thorough testing and debugging to identify and resolve issues and ensure the reliability and stability of the developed applications.
                <br />• Stay up-to-date with the latest web development trends, technologies, and best practices and apply them to enhance the development process.
                <br />• Collaborate with the team to continuously improve development workflows, code quality, and overall software excellence.
              </Text>
            </Box>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="lg"
              bg={bg}
              transition="background-color 0.2s"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
            >
              <Heading as="h3" size="md" color={headingColor}>
                Team Leader
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Befit, Delhi | Jan 2023 - Present
              </Text>
              <Text fontSize="md" color={textColor}>
                Led the development of a health and fitness web application using the MERN stack. Coordinated tasks among
                team members, ensured timely delivery of features, and managed project issues using GitHub.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4} color={headingColor}>
            Education
          </Heading>
          <VStack align="start" spacing={4}>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="lg"
              bg={bg}
              transition="background-color 0.2s"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
            >
              <Heading as="h3" size="md" color={headingColor}>
                B.Sc. in Zoology
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Indira Gandhi National Open University, Delhi | 2020 - 2023
              </Text>
              <Text fontSize="md" color={textColor}>
                Completed a comprehensive degree program with a focus on biological sciences.
              </Text>
            </Box>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="lg"
              bg={bg}
              transition="background-color 0.2s"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
            >
              <Heading as="h3" size="md" color={headingColor}>
                Full Stack Web Development Program
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Masai School, Delhi | 2022 - 2023
              </Text>
              <Text fontSize="md" color={textColor}>
                Completed an intensive full-time program focused on the MERN stack.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4} color={headingColor}>
            Projects
          </Heading>
          <VStack align="start" spacing={4}>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="lg"
              bg={bg}
              transition="background-color 0.2s"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
            >
              <Heading as="h3" size="md" color={headingColor}>
                Befit
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Jan 2023 - Present
              </Text>
              <Text fontSize="md" color={textColor}>
                Developed a health and fitness web application. Implemented features such as user authentication, activity
                tracking, and nutrition management using the MERN stack.
              </Text>
              <Text fontSize="sm" color={textColor}>
                <b>Tech Stack:</b> React.js, Node.js, Express.js, MongoDB
              </Text>
            </Box>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="lg"
              bg={bg}
              transition="background-color 0.2s"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
            >
              <Heading as="h3" size="md" color={headingColor}>
                Portfolio Website
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Nov 2022 - Dec 2022
              </Text>
              <Text fontSize="md" color={textColor}>
                Created a personal portfolio website to showcase projects and skills. Implemented responsive design and smooth
                navigation.
              </Text>
              <Text fontSize="sm" color={textColor}>
                <b>Tech Stack:</b> React.js, Chakra UI
              </Text>
            </Box>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="lg"
              bg={bg}
              transition="background-color 0.2s"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
            >
              <Heading as="h3" size="md" color={headingColor}>
                E-commerce Platform
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Sep 2021 - Dec 2021
              </Text>
              <Text fontSize="md" color={textColor}>
                Developed a full-featured e-commerce platform with user authentication, product listings, and a shopping cart
                using the MERN stack.
              </Text>
              <Text fontSize="sm" color={textColor}>
                <b>Tech Stack:</b> React.js, Node.js, Express.js, MongoDB
              </Text>
            </Box>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="lg"
              bg={bg}
              transition="background-color 0.2s"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
            >
              <Heading as="h3" size="md" color={headingColor}>
                Chat Application
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Jul 2021 - Aug 2021
              </Text>
              <Text fontSize="md" color={textColor}>
                Built a real-time chat application with private and group chat features using the MERN stack. Implemented
                WebSocket for real-time communication.
              </Text>
              <Text fontSize="sm" color={textColor}>
                <b>Tech Stack:</b> React.js, Node.js, Express.js, MongoDB, WebSocket
              </Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
    </Box>
  );
};

export default Resume;
