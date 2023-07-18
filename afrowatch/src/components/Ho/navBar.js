import React from 'react';
// import styled from 'styled-components';
import NavOptions from './NavOptions';

const NavBar = ()=>{
    return (
        <>
        <img src="logo.png" alt="logo.png"/>
        <NavOptions />
        <div>
        <button>Log In</button>
        <button>Sign In</button>
        </div>
        
        </>
    )
}

export default NavBar;