import React, { useState, useEffect } from 'react';

const HTMLContent = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlFile = async () => {
      try {
        const response = await fetch('./Home.html'); // Replace with the correct path to your HTML file
        const data = await response.text();
        setHtmlContent(data);
      } catch (error) {
        console.error('Error fetching HTML file:', error);
      }
    };

    fetchHtmlFile();
  }, []);

  return (
    <div dangerouslySetML={{ __html: HTMLContent }} ></div>
  );
};

export default HTMLContent;
