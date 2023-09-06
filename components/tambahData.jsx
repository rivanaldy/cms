

import React, { useState } from "react";

const InputPage = () => {
  const [formState, setFormState] = useState({
    heading: "",
    paragraph: "",
    media: null,
    paragraphs: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === "media" ? files[0] : value,
    }));
  };

  const handleAddParagraph = () => {
    setFormState((prevState) => ({
      ...prevState,
      paragraphs: [...prevState.paragraphs, formState.paragraph],
      paragraph: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Menyimpan data yang ditambahkan ke localStorage
    const newData = {
      heading: formState.heading,
      paragraphs: formState.paragraphs,
      media: formState.media ? URL.createObjectURL(formState.media) : null,
    };
    const storedData = JSON.parse(localStorage.getItem("aboutUsData")) || [];
    storedData.push(newData);
    localStorage.setItem("aboutUsData", JSON.stringify(storedData));

    // Reset form
    setFormState({
      heading: "",
      paragraph: "",
      media: null,
      paragraphs: [],
    });
  };

  return (
    <div className="px-36">
      <h1>Input Page Tentang Perusahaan</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="heading">Form Heading:</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formState.heading}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="paragraph">Form Paragraf:</label>
          <textarea
            id="paragraph"
            name="paragraph"
            value={formState.paragraph}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="media">Upload Media:</label>
          <input
            type="file"
            id="media"
            name="media"
            accept="image/*,video/*" // Hanya menerima foto dan video
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleAddParagraph}>
          Tambah Paragraf
        </button>
        {formState.paragraphs.length > 0 && (
          <div>
            <h2>Data yang sudah ditambahkan:</h2>
            <ul>
              {formState.paragraphs.map((p, index) => (
                <li key={index}>{p}</li>
              ))}
            </ul>
          </div>
        )}
        {formState.media && (
          <div>
            <h2>Media yang sudah diunggah:</h2>
            {formState.media.type.startsWith('image') ? (
              <img
                src={URL.createObjectURL(formState.media)}
                alt="Media yang diunggah"
              />
            ) : formState.media.type.startsWith('video') ? (
              <video
                src={URL.createObjectURL(formState.media)}
                controls
              />
            ) : null}
          </div>
        )}
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputPage;
