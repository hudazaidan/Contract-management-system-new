import React, { useState } from 'react';
import './form.css';

const Form = () => {
    const [user, setUser] = useState(
        {
            first_name: '' ,
            last_name:'',
            email:'',
            signingDate:new Date().toISOString().split('T')[0], // Set to current date,
            ExpirationDate:'',
            address:'',
            phone_number:''
        });
    
    let name,value;
    console.log(user); //to get all value 

    const data=(e)=>{
        name = e.target.name;
        value  = e.target.value;
        setUser({...user, [name]: value});

        if (name === 'signingDate') {
            const signingDate = new Date(value);
            const currentDate = new Date();

            // Calculate the difference in days
            const differenceInDays = Math.floor((signingDate - currentDate) / (1000 * 60 * 60 * 24));

            // Set ExpirationDate based on the difference
            if (differenceInDays === 1) {
                const expirationDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
                setUser({ ...user, ExpirationDate: expirationDate.toISOString().split('T')[0] });
            } else if (differenceInDays <= 7) {
                const expirationDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
                setUser({ ...user, ExpirationDate: expirationDate.toISOString().split('T')[0] });
            } else if (differenceInDays <= 30) {
                const expirationDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
                setUser({ ...user, ExpirationDate: expirationDate.toISOString().split('T')[0] });
            }
    }
};


    const getdata = async (e)=>
    {    e.preventDefault();
        const{first_name,last_name,email,signingDate,
        ExpirationDate,address,phone_number} = user;
      
       const options ={
        method: 'POST',
        headers:{
            'Content-Type':'aplication/json'
        },
        body: JSON.stringify(
            {
                first_name,
                last_name,
                email,
                signingDate,
                ExpirationDate,
                address,
                phone_number
            })
        
       }
     //data base link 
       const res = await fetch(
        'https://reactreg-ffaef-default-rtdb.firebaseio.com/UserData.json',
        options
        )
        console.log(res);
        if(res){
            alert("Messege Sent");
        }
        else
        {
            alert("Error Occured");
        }

         // Add the actual fetch call to send the data to the server
         fetch('your-api-endpoint', options)
         .then(response => response.json())
         .then(data => console.log(data))
         .catch(error => console.error(error));
    };


    /*========to set the date============ */
   
       
    
   
  return (
    <>
    <div className='form'>
        <div className='container'>
            <form method="POST">
                <input type="text" name='first_name' placeholder='first_name' value={user.first_name} autoComplete='on' required onChange={data}></input>
                <input type="text" name='last_name' placeholder='last_name' value={user.last_name} autoComplete='on' required onChange={data}></input>
                <input type="email" name='email' placeholder='email' value={user.email} autoComplete='on' required onChange={data}></input>
                <input type="date" name='signingDate:' value={user.signingDate}  required readOnly="true" onChange={data}></input>
                <input type="date" name='ExpirationDate:' value={user.ExpirationDate} autoComplete='on' required onChange={data}></input>
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