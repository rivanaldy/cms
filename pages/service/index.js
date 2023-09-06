import { useState } from "react";
import {
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import ServiceCard from "@/components/ServiceCard";
const Services = () => {
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    media: "",
  });
  const [servicesData, setServicesData] = useState([
    {
      title: "Layanan 1",
      description: "Deskripsi layanan 1.",
    },
    {
      title: "Layanan 2",
      description: "Deskripsi layanan 2.",
    },
    {
      title: "Layanan 3",
      description: "Deskripsi layanan 3.",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  const handleAddService = () => {
    setServicesData([...servicesData, newService]);
    setNewService({
      title: "",
      description: "",
      media: "",
    });
  };

  return (
    <Container maxW="container.xl" px={32} py={12}>
      <Heading as="h1" size="xl" mb={8}>
        Layanan Kami
      </Heading>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          name="title"
          placeholder="Judul Layanan"
          value={newService.title}
          onChange={handleInputChange}
        />
        <Textarea
          name="description"
          placeholder="Deskripsi Layanan"
          value={newService.description}
          onChange={handleInputChange}
          mt={2}
        />
        <Input
          type="file"
          name="media"
          placeholder="Unggah Media (opsional)"
          onChange={handleInputChange}
          mt={2}
        />
        <Button
          onClick={handleAddService}
          mt={2}
          colorScheme="teal"
          variant="outline"
        >
          Tambah Service Baru
        </Button>
      </form>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={6}>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </Grid>
      <Button mt={6} colorScheme="blue" variant="outline">
        Submit
      </Button>
    </Container>
  );
};

export default Services;
