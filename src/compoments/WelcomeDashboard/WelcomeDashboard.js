import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeDashboard = () => {
    return (
        <div>
            <h1 className='mt-2'>Welcome to West More.</h1>
            <Link to="/">
                <button className='btn btn-success'>Go to Home</button>
            </Link>
        </div>
    );
};

export default WelcomeDashboard;