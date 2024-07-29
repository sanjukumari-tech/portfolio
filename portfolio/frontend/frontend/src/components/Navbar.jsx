// src/components/Navbar.js
import React from 'react';
import { Box, Flex, HStack, Link, IconButton, useColorMode, useColorModeValue, Text, Icon } from '@chakra-ui/react';
import { FaHome, FaProjectDiagram, FaInfoCircle, FaSignInAlt, FaUserPlus, FaEnvelope } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.100');

  return (
    <Box bg={bg} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontSize="2xl" fontWeight="bold" color={color}>
          Sanju Kumari
        </Box>
        <HStack as="nav" spacing={8} justifyContent="center" flex="1">
          <Link as={RouterLink} to="/home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Icon as={FaHome} w={5} h={5} mr={2} color="blue.500" />
            <Text>Home</Text>
          </Link>
          <Link as={RouterLink} to="/resume" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Icon as={FaSignInAlt} w={5} h={5} mr={2} color="green.500" />
            <Text>Resume</Text>
          </Link>
          <Link as={RouterLink} to="/register" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Icon as={FaUserPlus} w={5} h={5} mr={2} color="orange.500" />
            <Text>Register</Text>
          </Link>
          <Link as={RouterLink} to="/about" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Icon as={FaInfoCircle} w={5} h={5} mr={2} color="purple.500" />
            <Text>About</Text>
          </Link>
          <Link as={RouterLink} to="/projects" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Icon as={FaProjectDiagram} w={5} h={5} mr={2} color="red.500" />
            <Text>Projects</Text>
          </Link>
          <Link as={RouterLink} to="/contact" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Icon as={FaEnvelope} w={5} h={5} mr={2} color="teal.500" />
            <Text>Contact</Text>
          </Link>
        </HStack>
        <Flex alignItems="center">
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
            variant="ghost"
            color={color}
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
