import { Box, Heading, Text } from "@chakra-ui/react";

const ServiceCard = ({ title, description }) => {
  return (
    <Box
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      _hover={{ shadow: "lg" }}
    >
      <Heading size="md">{title}</Heading>
      <Text mt={2}>{description}</Text>
    </Box>
  );
};

export default ServiceCard;
