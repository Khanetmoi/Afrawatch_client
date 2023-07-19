import React from 'react';
import styled from 'styled-components';

const List = styled.div`
display: flex;
justify-content: space-between;

li {
  margin-inline: 20px;
  list-style-type: none;
}
`

const NavOptions = ()=>{
   const sortByLikes = ()=>{ console.log("sortBylikes")}
   const sortByName = ()=>{console.log("sortByName")}
   const sortByViews = ()=>{console.log("sortByViews")}
   const sortByDate = ()=>{console.log("sortByDates")}
   const Search = ()=>{console.log("Search")}
    return (
        <List>
          <li onClick={sortByLikes}>Home</li>
          <li onclick={sortByName}>Movie List</li>
          <li onClick={sortByViews}>Popular</li>
          <li onClick = {sortByDate}>New Movie</li>
          <li>
            <input type="text"/>
            <button onClick={Search}>search</button>
          </li>
        </List>
    )
}

export default NavOptions;