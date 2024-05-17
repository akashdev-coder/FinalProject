import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookDetails({ item }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get('https://finalprojectback-2.onrender.com/book');
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, []);

  if (!book) {
    return <div>Loading...</div>; // Show loading indicator while fetching book details
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <p>Author: {item.author}</p>
      <p>Price: ${item.price}</p>
      <p>Description: {item.description}</p>
      <img src={item.image} alt={item.name} />
    </div>
  );
}


export default BookDetails;
