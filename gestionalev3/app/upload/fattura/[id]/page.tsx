'use client'

import React, { useState } from 'react';
import axios from 'axios';

function UploadForm({params}) {

  let id = params.id

  const [costo, setCosto] = useState("");
  const [data, setData] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');



  const handleCosto = (event) => {
    setCosto(event.target.value)
  };

  const handleData = (event) => {
    setData(event.target.value)
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  
  };


 
  
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('costo', costo);
    formData.append('image', image, data);
   
    try {
      const response = await axios.post('http://127.0.0.1:2000/upload_fatture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Errore durante il caricamento dell\'immagine.');
    }
  };

  return (
    <div>
      <h2>Carica un'immagine</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="costo">Quantità:</label>
          <input type="text" id="costo" value={costo} placeholder="Quantità" onChange={handleCosto} />
        </div>

        <div>
          <label htmlFor="data">Data:</label>
          <input type="date" id="data" value={data} placeholder="Data" onChange={handleData} />
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