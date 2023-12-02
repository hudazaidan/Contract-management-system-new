import React, { useState, useEffect } from 'react';
import './style.css';
import './admin.css';
import { Link } from 'react-router-dom';
import logo from './img/dumble.webp';
import '../Home/style/header.css'

function Company() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://reactreg-ffaef-default-rtdb.firebaseio.com/UserData.json');
      if (!response.ok) {
        console.log(response);
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      // Convert data from object to array if needed
      const dataArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key],
      }));

      setContracts(dataArray);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleAcceptReject = async (id, action) => {
    try {
      const response = await fetch(`https://reactreg-ffaef-default-rtdb.firebaseio.com/UserData/${id}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: action,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Update the local state to reflect the change
      setContracts(prevContracts =>
        prevContracts.map(contract =>
          contract.id === id ? { ...contract, status: action } : contract
        )
      );
    } catch (error) {
      console.error('Error updating contract:', error.message);
    }
  };

  return (
    <>
      {/* <header>
        <div className="logo">
          <div className="logoimg">
            <img src={logo} alt="" />
          </div>
          <h2>FitBody</h2>
        </div>

        <div>LogOut</div>
      </header> */}

      <div className="admin-wrapper">
        <div className="left-sidebar">
          <ul>
            <li>
              <Link to={'/Company'}> Company</Link>
            </li>
            <li>
              <Link to={'/Users'}> Users</Link>
            </li>
          </ul>
        </div>

        <div className="admin-content">
          <div className="button-group"></div>

          <div className="content">
            <h2 className="page-title">Company</h2>

            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Sign Date</th>
                  <th>ExpirationDate</th>
                  <th>Cost</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((contract, index) => (
                  <tr key={contract.id}>
                    <td>{index + 1}</td>
                    <td>{contract.first_name}</td>
                    <td>{contract.email}</td>
                    <td>{contract.signingDate}</td>
                    <td>{contract.ExpirationDate}</td>
                    <td>{contract.cost}</td>
                    <td>{contract.address}</td>
                    <td className="button-group">
                      {contract.status !== 'Accepted' && (
                        <button className="ac" onClick={() => handleAcceptReject(contract.id, 'Accepted')}>
                          Accept
                        </button>
                      )}
                      {contract.status !== 'Rejected' && (
                        <button className="re" onClick={() => handleAcceptReject(contract.id, 'Rejected')}>
                          Reject
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
