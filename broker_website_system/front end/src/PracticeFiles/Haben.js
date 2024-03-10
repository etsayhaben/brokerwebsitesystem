import React, { useState, useEffect } from 'react';

const Haben = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlFile = async () => {
      try {
        const response = await fetch('path/to/your/home.html'); // Replace with the correct path to your HTML file
        const data = await response.text();
        setHtmlContent(data);
      } catch (error) {
        console.error('Error fetching HTML file:', error);
      }
    };
cd
    fetchHtmlFile();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default Haben;
