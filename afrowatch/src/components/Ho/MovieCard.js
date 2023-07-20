import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
width: 23%;
margin: 1.5%;
  div {
    position: relative;
    
    height: 20rem;
     background-color: yellow;
      
    button {
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }
`;

const MovieCard = ({ trailer, picture, title, year }) => {
  const [hovering, setHovering] = useState(true);

  const handleHover = () => {
    setHovering(false);
  };

  return (

    <Card onMouseEnter={handleHover}>
      <div>
        <img src={picture}/>
        <button>Play</button>
      </div>

      <h2>{title}</h2>
      <h3>{year} . {60} mn</h3>

    </Card >
 
  );
};



export default MovieCard;