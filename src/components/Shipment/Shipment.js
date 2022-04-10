import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    // const handleEmailBlur = event => {
    //     console.log(event.target.value);
    //     setEmail(event.target.value);
    // }
    const handleAddressBlur = event => {
        console.log(event.target.value);
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        console.log(event.target.value);
        setPhone(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name,shipping,address,phone};
        console.log(shipping);


    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">Email</label>
                        <input value={user?.email} readonly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {/* {error} */}
                    </p>
                    <p style={{ color: 'red' }}>
                        {/* {hookError} */}
                    </p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Shipment;