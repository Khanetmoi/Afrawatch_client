import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
 width: 25%;
  div {
    backgrounColor: 'black';
  }
`;


const MovieCard = ({ trailer, picture, title, year }) => {
  const [hovering, setHovering] = useState(false);

  const handleHover = () => {
    setHovering(true);
  };

  return (

    <Card  onMouseEnter={handleHover}>
      <div>
      {hovering ? (
        <img src={picture} alt="Movie Poster" />
      ) : (
        <video width="320" height="240" controls>
          <source src={trailer} type="video/mp4" />
        </video>
      )}
      </div>
      <h2>{title}</h2>
      <h3>{year}</h3>
    </Card >
 
  );
};



export default MovieCard;