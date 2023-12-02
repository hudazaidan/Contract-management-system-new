import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import './admin.css';

const firebaseConfig = {
  apiKey: "AIzaSyD4zjVBeHSdl4ZU6xBUrIJ4UGIdM7P8eGI",
  authDomain: "pppp-a2a1b.firebaseapp.com",
  databaseURL: "https://pppp-a2a1b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pppp-a2a1b",
  storageBucket: "pppp-a2a1b.appspot.com",
  messagingSenderId: "623104743181",
  appId: "1:623104743181:web:ae0dc419a54a413f648244"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

function Users() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await db.ref('users').once('value');
        const usersData = usersSnapshot.val();

        if (usersData) {
          const usersArray = Object.entries(usersData).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setUsers(usersArray);
        }
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, [editUserId]);

  const handleDeleteUser = async (userId) => {
    try {
      await db.ref(`users/${userId}`).remove();
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const handleEditUser = (userId) => {
    setEditUserId(userId);
  };

  const handleSaveEdit = async (userId, updatedUserData) => {
    try {
      await db.ref(`users/${userId}`).update(updatedUserData);
      setEditUserId(null);
    } catch (error) {
      console.error('Error editing user:', error.message);
    }
  };

  return (
    <>
      {/* Your header JSX goes here */}

      <div className="admin-wrapper">
        <div className="left-sidebar">
          <ul>
            <li><Link to={"/Company"}> Company</Link></li>
            <li><Link to={"/Users"}> Users</Link></li>
            {/* Add other list items as needed */}
          </ul>
        </div>

        <div className='aa' style={{ margin: 24 }}>
          <Card.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>
                      {editUserId === user.id ? (
                        <input
                          type="text"
                          value={user.name}
                          onChange={(e) =>
                            handleSaveEdit(user.id, { name: e.target.value })
                          }
                        />
                      ) : (
                        user.name
                      )}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                      {editUserId === user.id ? (
                        <button onClick={() => setEditUserId(null)}>Cancel</button>
                      ) : (
                        <>
                          <button style={{ marginRight: "20px" }} onClick={() => handleEditUser(user.id)}>Edit</button>
                          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </div>
      </div>
    </>
  );
}

export default Users;
