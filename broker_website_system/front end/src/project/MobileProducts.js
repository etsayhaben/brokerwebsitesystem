import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  './MobileProduct.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate} from 'react-router-dom';
import Header from './Header';

const MobileProducts = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { state } = location;
  console.log(state);
  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getUserImages');
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
      <Header/>
      <div class="products">
      <h3>

        Choose what ever you want to buy
      </h3>
      <div className="image-gallery">
        {data.map((imageUrl, index) => (
          <div className="product-card">
          <div className="image-container">
          <img  key={index} src={imageUrl} alt={`Image ${index}`} />
            <div class="info">
              <p class="description">tecno pop 3</p>
              <Link to='/payment'>
                    <button class='m' type="button">Buy now</button>
                  </Link>
            </div>
          </div>
          </div>

        ))}
      </div>
      </div>
    </div>
  );
};









export default MobileProducts;
