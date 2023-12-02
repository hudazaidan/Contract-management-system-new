import React, { useState } from 'react';
import './form.css';

const Form = () => {
    const [user, setUser] = useState({
      first_name: '',
      last_name: '',
      email: '',
      signingDate: new Date().toISOString().split('T')[0], // Set to current date
      ExpirationDate: '',
      address: '',
      phone_number: '',
      status: 'Pending',
      cost:'30$'
    });
  
    const data = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };
  
    const getdata = async (e) => {
      e.preventDefault();
  
      const {
        first_name,
        last_name,
        email,
        signingDate,
        address,
        phone_number,
        status,
        cost
      } = user;
  
      // Calculate ExpirationDate as seven days ahead of signingDate
      const expirationDate = new Date(signingDate);
      expirationDate.setDate(expirationDate.getDate() + 7);
  
      const contractData = {
        first_name,
        last_name,
        email,
        signingDate,
        ExpirationDate: expirationDate.toISOString().split('T')[0],
        address,
        phone_number,
        status: 'Pending',
        cost:'30$'
      };
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contractData),
      };
  
      try {
        const res = await fetch(
          'https://reactreg-ffaef-default-rtdb.firebaseio.com/UserData.json',
          options
        );
  
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
  
        const responseData = await res.json();
        const newContractId = responseData.name; // Firebase assigns the unique identifier
  
        alert('Message Sent, Contract ID: ' + newContractId);
  
        // You can use the newContractId for further reference or display in your component
        setUser({ ...user, id: newContractId });
      } catch (error) {
        console.error('Error occurred:', error.message);
        alert('Error Occurred');
      }
    };
  
    return (
      <>
        <div className='form'>
          <div className='container'>
            <form method="POST">
              <input type="text" name='first_name' placeholder='first_name' value={user.first_name} autoComplete='on' required onChange={data}></input>
              <input type="text" name='last_name' placeholder='last_name' value={user.last_name} autoComplete='on' required onChange={data}></input>
              <input type="email" name='email' placeholder='email' value={user.email} autoComplete='on' required onChange={data}></input>
              <input type="date" name='signingDate:' value={user.signingDate} required readOnly="true" onChange={data}></input>
              <input type="date" name='ExpirationDate:' value={user.ExpirationDate} readOnly="true"></input>
              <input type="text" name='address' placeholder='our Address' value={user.address} autoComplete='on' onChange={data}></input>
              <input type="number" name='phone_number' placeholder='phone number' value={user.phone_number} autoComplete='on' required onChange={data}></input>
              <button onClick={getdata}>Submit</button>
            </form>
          </div>
        </div>
      </>
    )
  }
export default Form