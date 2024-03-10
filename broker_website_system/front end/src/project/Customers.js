import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customer data when the component mounts
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/customers');
      console.log(response.data)
      setCustomers(response.data.data); // Assuming the data is under the "data" key
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }
  };

  return (
    <div>
      <h1>Customer List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* Add more columns based on your customer table structure */}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{`${customer.FIRSTNAME} ${customer.LASTNAME}`}</td>
              <td>{customer.email}</td>
              {/* Add more columns based on your customer table structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
