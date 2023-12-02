import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import img from './img/default-img.jpg';


function UserProfile() {
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetch('https://reactreg-ffaef-default-rtdb.firebaseio.com/UserData.json');
                const userJson = await userResponse.json();
                
                const userId = Object.keys(userJson)[0];
                const user = userJson[userId];
                setUserData(user);
                console.log(userJson);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    const handleFirstNameChange = (e) => {
        setUserData((prevData) => ({
            ...prevData,
            first_name: e.target.value,
        }));
    };

    const handleLastNameChange = (e) => {
        setUserData((prevData) => ({
            ...prevData,
            last_name: e.target.value,
        }));
    };

    const handleEmailChange = (e) => {
        setUserData((prevData) => ({
            ...prevData,
            email: e.target.value,
        }));
    };

    const handleSaveChanges = async () => {
        try {
            await axios.put('https://reactreg-ffaef-default-rtdb.firebaseio.com/UserData/-NkaSFUXUCldmD6F1X22.json', userData);
            console.log('Data updated successfully!');
            alert('Data updated successfully!');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const { first_name, last_name, email } = userData;

    return (
        <section>
            <div className="container light-style flex-grow-1 container-p-y">
                <h2 className="font-weight-bold py-3 mb-4">Account settings</h2>
                <div className="card overflow-hidden">
                    <div className="row no-gutters row-bordered row-border-light">
                        <div className="col-md-3 pt-0 ">
                            <div className="list-group list-group-flush account-settings-links">
                                <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">
                                    General
                                </a>
                            </div>
                            <div className="card-body media align-items-center" style={{textAlign:"center"}}>
                                <img src={img} alt="" className="d-block ui-w-80" id="userImage" style={{ width: "200px", borderRadius: "50%", marginLeft:"40px"}} />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="account-general">

                                    <hr className="border-light m-0" />
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control mb-1" id="firstNameContainer" value={first_name || ''} onChange={handleFirstNameChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control mb-1" id="lastNameContainer" value={last_name || ''} onChange={handleLastNameChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">E-mail</label>
                                            <input type="text" className="form-control mb-1" id="emailContainer" value={email || ''} onChange={handleEmailChange} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-3 mb-3">
                        <button id="updateBtn" type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                            Save changes
                        </button>
                        &nbsp;
                        <Link to="/profile">
                            <button type="button" className="btn btn-default mr-4">
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;
