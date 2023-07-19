import React from 'react';
import styled from 'styled-components';
import NavOptions from './NavOptions';

const Navigation = styled.div`
display: flex;
justify-content: space-between;
`;
const NavBar = ()=>{
    return (
        <Navigation>
        <img src="logo.png" alt="logo.png"/>
        <NavOptions />
        <div>
        <button>Log In</button>
        <button>Sign In</button>
        </div>
        
        </Navigation>
    )
}

export default NavBar;