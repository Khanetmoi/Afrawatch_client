import React, { useState } from 'react';
// import styled,{ ThemeProvider } from 'styled-components';

// const Card = styled.div``;
// const theme = {
//   // Define your theme properties here
//   colors: {
//     primary: 'blue',
//     secondary: 'green',
//   },
// };

const MovieCard = ({ trailer, picture, title, year }) => {
  const [hovering, setHovering] = useState(false);

  const handleHover = () => {
    setHovering(true);
  };

  return (

    <div onMouseEnter={handleHover}>
      {hovering ? (
        <img src={picture} alt="Movie Poster" />
      ) : (
        <video width="320" height="240" controls>
          <source src={trailer} type="video/mp4" />
        </video>
      )}
      <h2>{title}</h2>
      <h3>{year}</h3>
    </div>
 
  );
};



export default MovieCard;