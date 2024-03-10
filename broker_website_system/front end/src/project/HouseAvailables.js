import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate} from 'react-router-dom';

const MobileProducts = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { state } = location;
  console.log(state);
  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const response = await axios.get('http://localhost:8000/selectAlldata');
        console.log(response);

        if (response.data.success) {
          const imageArrays = response.data.result;
          console.log(imageArrays);
          const imageUrls = imageArrays.flatMap((imageArray) =>
            imageArray.map((item) => `http://localhost:8000/uploads/${item.image_file}`)
          );

          setData(imageUrls);
        } else {
          console.error(response.data.error);
        }
      } catch (error) {
        console.error('Error fetching image URLs:', error);
      }
    };

    fetchImageUrls();
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-gallery">
        {data.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default MobileProducts;
