import React from 'react';
import {Link} from 'react-router-dom'
export default function Home(){
    return (
        <>
        <h1>Welcome to the Bubble App!</h1>
        <Link to ='/login'> Go to Login </Link>
        </>
    )
}