import { useState } from "react";
import {
  Container,
  Heading,
  Input,
  Button,
  Flex,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import TeamMemberCard from "@/components/TeamMemberCard";
const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [newMember, setNewMember] = useState({ name: "", position: "" });
  const [editMemberIndex, setEditMemberIndex] = useState(null); // Menyimpan indeks anggota tim yang akan diubah
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({
      ...newMember,
      [name]: value,
    });
  };

  const handleAddMember = () => {
    setTeamData([...teamData, newMember]);
    setNewMember({ name: "", position: "" });
  };

  const handleOpenEditModal = (index) => {
    setEditMemberIndex(index);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditMemberIndex(null);
    setIsEditModalOpen(false);
  };

  const handleEditMember = () => {
    if (editMemberIndex !== null) {
      const updatedTeamData = [...teamData];
      updatedTeamData[editMemberIndex] = newMember;
      setTeamData(updatedTeamData);
      handleCloseEditModal();
    }
  };

  const handleDeleteMember = (index) => {
    const updatedTeamData = [...teamData];
    updatedTeamData.splice(index, 1);
    setTeamData(updatedTeamData);
  };

  return (
    <Container maxW="container.xl" px={32} py={12}>
      <Heading as="h1" size="xl" mb={6}>
        Data Tim
      </Heading>
      <Flex>
        <Input
          type="text"
          name="name"
          placeholder="Nama"
          value={newMember.name}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="position"
          placeholder="Posisi"
          value={newMember.position}
          onChange={handleInputChange}
        />
        <Button ml={2} colorScheme="teal" onClick={handleAddMember}>
          Tambah Data Tim
        </Button>
      </Flex>
      <Box mt={6}>
        {teamData.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            position={member.position}
            onEdit={() => handleOpenEditModal(index)}
            onDelete={() => handleDeleteMember(index)}
          />
        ))}
      </Box>

      {/* Modal Edit */}
      <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Data Tim</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              name="name"
              placeholder="Nama"
              value={newMember.name}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="position"
              placeholder="Posisi"
              value={newMember.position}
              onChange={handleInputChange}
              mt={2}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleEditMember}>
              Simpan Perubahan
            </Button>
            <Button variant="ghost" onClick={handleCloseEditModal}>
              Batal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Team;
