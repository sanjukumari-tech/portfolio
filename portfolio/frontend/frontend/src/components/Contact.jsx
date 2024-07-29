// src/components/Contact.js
import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent.",
        description: "Your message has been sent successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <Container maxW="container.md" py={8}>
      <Box
        bg={useColorModeValue('gray.100', 'gray.700')}
        p={6}
        borderRadius="md"
        boxShadow="md"
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isRequired
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="sanju.kumari@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isRequired
            />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Your message here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              isRequired
            />
          </FormControl>
          <Button
            colorScheme="teal"
            type="submit"
            width="full"
            isLoading={isSubmitting}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Contact;
