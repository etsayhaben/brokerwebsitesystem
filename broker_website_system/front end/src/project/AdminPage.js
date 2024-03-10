// import { useState } from 'react';
// import axios from 'axios';
// import './AdminPage.css';
// import { Link } from 'react-router-dom';


// export default function AdminPage() {
//   const [productId, setProductId] = useState('');
//   const [message, setMessage] = useState('');




//   const handleProductid=(event)=>
//   {
//     setProductId(event.target.value);
//   }
//   const deleteProduct = () => {
//     axios
//       .delete(`http://localhost:8000/delete_product/${productId}`)
//       .then((response) => {
//         setMessage(response.data.message || response.data.error);
//         console.log(response.data.message);
//         alert('deleted successfully');
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setMessage('An error occurred. Please try again.');
//       });
//   };

//   return (
//     <div>
//       <h2>This is admin page</h2>
     
//         <Link to='/Customers'>
//         <button >view customers</button>
//         </Link>
//     </div>
//   );
// }
