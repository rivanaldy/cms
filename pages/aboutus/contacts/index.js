
// import React, { useState } from 'react'
// import {
//   Modal, Box, Button,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Input,
//   Select, // Import komponen Select dari Chakra UI
// } from '@chakra-ui/react'

// function Index() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const finalRef = React.useRef(null)
//   const [contacts, setContacts] = useState([{ type: '', value: '' }])

//   const handleAddContact = () => {
//     setContacts([...contacts, { type: '', value: '' }])
//   }

//   const handleChangeContact = (index, key, value) => {
//     const updatedContacts = [...contacts]
//     updatedContacts[index][key] = value
//     setContacts(updatedContacts)
//   }

//   const handleSubmit = () => {
//     // Lakukan sesuatu dengan data kontak yang sudah terkumpul
//     console.log(contacts)
//     onClose()
//   }

//   return (
//     <div >
//       <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
//         Some other content that'll receive focus on close.
//       </Box>

//       <Button ml={28} mt={4} onClick={onOpen}>
//         Tambah kontak
//       </Button>
//       <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             {contacts.map((contact, index) => (
//               <div key={index}>
//                 <Select
//                   placeholder='Pilih tipe kontak'
//                   value={contact.type}
//                   onChange={(e) => handleChangeContact(index, 'type', e.target.value)}
//                 >
//                   <option value='Telp'>Telp</option>
//                   <option value='HP'>HP</option>
//                   <option value='Email'>Email</option>
//                 </Select>
//                 <Input
//                   placeholder='Masukkan kontak'
//                   value={contact.value}
//                   onChange={(e) => handleChangeContact(index, 'value', e.target.value)}
//                 />
//               </div>
//             ))}
//             <Button mt={2} onClick={handleAddContact}>
//               Tambah Contact
//             </Button>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='blue' mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant='ghost' onClick={handleSubmit}>
//               Submit
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </div>
//   )
// }

// export default Index

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
  Text,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Team = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: "", email: "" });
  const [editContactIndex, setEditContactIndex] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  const handleAddContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact({ name: "", email: "" });
  };

  const handleOpenEditModal = (index) => {
    setEditContactIndex(index);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditContactIndex(null);
    setIsEditModalOpen(false);
  };

  const handleEditContact = () => {
    if (editContactIndex !== null) {
      const updatedContacts = [...contacts];
      updatedContacts[editContactIndex] = newContact;
      setContacts(updatedContacts);
      handleCloseEditModal();
    }
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <Container maxW="container.xl" px={32} py={12}>
      <Heading as="h1" size="xl" mb={6}>
        Data Kontak
      </Heading>
      <Flex>
        <Input
          type="text"
          name="name"
          placeholder="Nama"
          value={newContact.name}
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleInputChange}
        />
        <Button ml={2} colorScheme="teal" onClick={handleAddContact}>
          Tambah Contact Baru
        </Button>
      </Flex>
      <Box mt={6}>
        {contacts.map((contact, index) => (
          <Flex
            key={index}
            justifyContent="space-between"
            alignItems="center"
            border="1px solid #e2e8f0"
            p={2}
            borderRadius="md"
            mt={2}
          >
            <Box>
              <Text>{contact.name}</Text>
              <Text>{contact.email}</Text>
            </Box>
            <Box>
              <IconButton
                icon={<EditIcon />}
                colorScheme="blue"
                variant="outline"
                onClick={() => handleOpenEditModal(index)}
                mr={2}
              />
              <IconButton
                icon={<DeleteIcon />}
                colorScheme="red"
                variant="outline"
                onClick={() => handleDeleteContact(index)}
              />
            </Box>
          </Flex>
        ))}
      </Box>

      {/* Modal Edit */}
      <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              name="name"
              placeholder="Nama"
              value={newContact.name}
              onChange={handleInputChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={newContact.email}
              onChange={handleInputChange}
              mt={2}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleEditContact}>
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
