import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'; // Import komponen modal dari react-modal
import InputPage from '@/components/tambahData';
const AboutUsPage = () => {
  const [aboutUsData, setAboutUsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol modal

  useEffect(() => {
    // Mengambil data dari localStorage
    const storedData = JSON.parse(localStorage.getItem('aboutUsData')) || [];
    setAboutUsData(storedData);
  }, []);

  // Fungsi untuk membuka modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(aboutUsData)
  return (
    <div className='px-32'>
      <h1>About Us</h1>
      <button onClick={openModal}>Tambah Data</button> {/* Tombol untuk membuka modal */}
      {aboutUsData.map((data, index) => (
        <div key={index}>
          <h2>{data.heading}</h2>
          <ul>
            {data.paragraphs.map((paragraph, idx) => (
              <li key={idx}>{paragraph}</li>
            ))}
          </ul>
          {data.media && (
            <img src={data.media} alt="Media" />
            )}
          
        </div>
      ))}
     

      {/* Modal Input Page */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Input Page Modal"
      >
        <button onClick={closeModal}>Tutup Modal</button>
        <InputPage />
      </Modal>
    </div>
  );
};
export default AboutUsPage


