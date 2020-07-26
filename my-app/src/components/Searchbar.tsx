
import React from 'react';


function Search(props: { userInput: any, search: any }) {
  return (
    <section className = "search-section">
        <input type="text" placeholder="Search IMDB-Like-Clone" className="search-box" onChange = {props.userInput} onKeyPress = {props.search}/>

    </section>
  );
}

export default Search;
