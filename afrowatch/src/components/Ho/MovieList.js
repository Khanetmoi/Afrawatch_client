import React, { useState, useEffect } from "react";
import MovieCard from './MovieCard';
import styled from 'styled-components';

const Container = styled.div`
  margin: 4rem;
  display: flex;
  flex-wrap: wrap;
`;

const MovieList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://myworklm.com/afrowatch/api/afrowatch_api_movie.php");
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Container>
      {userData.map((movie) => (
        <MovieCard
          key={movie.movie_id}
          trailer={`https://myworklm.com/afrowatch/trailers/${movie.movie_trailler_file}`}
          picture={movie.movie_image}
          title={movie.movie_name}
          year={movie.movie_year_release}
          id={movie.movie_id}
        />
      ))}
    </Container>
  );
};

export default MovieList;
