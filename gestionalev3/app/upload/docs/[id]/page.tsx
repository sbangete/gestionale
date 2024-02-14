'use client'

import React, { useState } from 'react';
import axios from 'axios';

function UploadForm({params}) {

  let id = params.id

  const [nome, setNome] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');



  const handleNome = (event) => {
    setNome(event.target.value)
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
   
  };


 
  
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('id', id);
    formData.append('image', image, nome) // Aggiungi il campo 'file' con il nome del file
  
    try {
      const response = await axios.post('http://51.210.108.56:2000/upload_other', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.message);
      redirec()
    } catch (error) {
      setMessage('Errore durante il caricamento dell\'immagine.');
    }
  };
  
  const redirec = () => {
    const destinationValue = `/scheda/students/${id}`;
    window.location.href = destinationValue;
}

  return (
    <div className='p-5'>
      <h2>Carica Altri Documenti</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={nome} placeholder="Nome" onChange={handleNome} />
        </div>

  
        <div>
          <label htmlFor="image">Immagine:</label>
          <input type="file" id="image" accept="image " onChange={handleImageChange} />
        </div>
     
        
        <button type="submit">Carica</button>
      </form>
    </div>
  );
}

export default UploadForm;
