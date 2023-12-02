import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import img from './img/default-img.jpg';
 
function Profile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const userResponse = await fetch('https://reactreg-ffaef-default-rtdb.firebaseio.com/UserData.json');
                const userDataFromApi = await userResponse.json();
        
                const userId = Object.keys(userDataFromApi)[0];
                const user = userDataFromApi[userId];
                setUserData(user);

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };


        fetchData();
    }, []);

    const getRemainingDays = () => {
        const expirationDate = new Date(userData?.ExpirationDate);
        const currentDate = new Date();
        const timeDifference = expirationDate.getTime() - currentDate.getTime();
        const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

        return remainingDays;
    };

    const getBackgroundColor = () => {
        const remainingDays = getRemainingDays();

        if (remainingDays <= 3) {
            return 'red';
        } else if (remainingDays <= 7) {
            return 'yellow';
        } else {
            return 'blue';
        }
    };

    return (<>
        <div className="profile-container">
            <div className="profile-picture">
                <img id="profileImage" src={img} alt='' />
            </div>
            <div className="profile-info">
                <p>
                    <strong>FirstName:</strong> {userData?.first_name || 'N/A'}
                </p>
                <p>
                    <strong>LastName:</strong> {userData?.last_name || 'N/A'}
                </p>
                <p>
                    <strong>Email:</strong> {userData?.email || 'N/A'}
                </p>
                
            </div>
            <div className="edit-button">
                
                    <button><a href="/userProfile">Edit Information</a></button>
                
            </div>
            <div className="contract" style={{ borderColor: getBackgroundColor() }}>
                <p>
                    First Name: <span>{userData?.first_name || 'N/A'}</span>
                </p>
                <p>
                    Last Name: <span>{userData?.last_name || 'N/A'}</span>
                </p>
                <p>
                    Email: <span>{userData?.email || 'N/A'}</span>
                </p>
                <p>
                    Signing Date: <span>{userData?.signingDate || 'N/A'}</span>
                </p>
                <p>
                    Expiration Date: <span>{userData?.ExpirationDate || 'N/A'}</span>
                </p>
                <p>
                    Address: <span>{userData?.address || 'N/A'}</span>
                </p>
                <p>
                    Phone Number: <span>{userData?.phone_number || 'N/A'}</span>
                </p>
                <p>
                    Cost: <span>{userData?.cost || 'N/A'}</span>
                </p>
                <p>
                    Status: <span>{userData?.status || 'N/A'}</span>
                </p>
            </div>
            
        </div>


</>
    );
}

export default Profile;
