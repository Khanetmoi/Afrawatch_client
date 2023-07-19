import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 25%;
  div {
    backgrounColor: 'black';
  }
`;

const Frame = styled.div`
  width: 320px;
  height: 240px;
  border: 1px solid red;
  background-color: blue;
`;

const MovieCard = ({ trailer, picture, title, year }) => {
  const [hovering, setHovering] = useState(true);

  const handleHover = () => {
    setHovering(false);
  };

  return (

    <Card onMouseEnter={handleHover}>
      <div>
        {hovering ? (
            <Frame />
          ) : (
            <video width="320" height="240">
              <source src={trailer} type="video/mp4" />
            </video>
          )
        }
      </div>

      <h2>{title}</h2>
      <h3>{year}</h3>

    </Card >
 
  );
};



export default MovieCard;