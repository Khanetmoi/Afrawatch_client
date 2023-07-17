import React from 'react';
import MovieCard from './MovieCard';
// // import styled from 'styled-components';
// import styled,{ ThemeProvider } from 'styled-components';

// const Container = styled.div`
// margin: 4rem;
// `;

// const theme = {
//   // Define your theme properties here
//   colors: {
//     primary: 'blue',
//     secondary: 'green',
//   },
// };

const MovieList = ()=>{
    const movie = [
        { trailer: "trailer1.mp4",
          picture: "picture1.png",
          title: "title1",
          year : 2010,
          id: 1
        },
        { trailer: "trailer2.mp4",
          picture: "picture2.png",
          title: "title2",
          year : 2011,
          id: 2
        },
        { trailer: "trailer3.mp4",
          picture: "picture3.png",
          title: "title3",
          year : 2013,
          id: 3
        },
        { trailer: "trailer4.mp4",
          picture: "picture4.png",
          title: "title4",
          year : 2011,
          id: 4
        }
]
    return (
        <div>
          {movie.map((item)=>(
            <MovieCard trailer={item.trailer} picture = {item.picture} title={item.title} year={item.year} key ={item.id}/>
          ))}
        </div>
      
    )
}


export default MovieList;