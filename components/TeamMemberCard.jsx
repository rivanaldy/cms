import { Box, Heading, Text, Button } from "@chakra-ui/react";

const TeamMemberCard = ({ name, position, onEdit, onDelete }) => {
  return (
    <Box
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      _hover={{ shadow: "lg" }}
    >
      <Heading size="md">{name}</Heading>
      <Text mt={2}>{position}</Text>
      <Button onClick={onEdit} mt={2} colorScheme="teal" variant="outline">
        Edit
      </Button>
      <Button onClick={onDelete} mt={2} colorScheme="red" variant="outline">
        Hapus
      </Button>
    </Box>
  );
};

export default TeamMemberCard;
