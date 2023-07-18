import React from 'react';
// import styled from 'styled-components';


const NavOptions = ()=>{
   const sortByLikes = ()=>{ console.log("sortBylikes")}
   const sortByName = ()=>{console.log("sortByName")}
   const sortByViews = ()=>{console.log("sortByViews")}
   const sortByDate = ()=>{console.log("sortByDates")}
   const Search = ()=>{console.log("Search")}
    return (
        <ul>
          <li onClick={sortByLikes}>Home</li>
          <li onclick={sortByName}>Movie List</li>
          <li onClick={sortByViews}>Popular</li>
          <li onClick = {sortByDate}>New Movie</li>
          <li>
            <input type="text"/>
            <button onClick={Search}>search</button>
          </li>
        </ul>
    )
}

export default NavOptions;