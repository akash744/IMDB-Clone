import React, {useState} from 'react';
import Search from './components/Searchbar' 
import Results from './components/searchResults';
import axios from 'axios';
import DetailsPage from './components/detailsPage';



function App() {

  const apiURL = "http://www.omdbapi.com/?i=tt3896198&apikey=258ffabf";
  const [state, setState] = useState({
    s : "",
    results: [],
    selected: {}
  });


  const search = (e: any) => {
    if (e.key === "Enter") {
      axios(apiURL + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }      

  const userInput = (e: any) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
    console.log(state.s);
  }

  const opendetailsPage = (id: any) => {
    axios(apiURL + "&i=" + id).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closeDetailsPage = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    })
  }


  return (
    <div className="App">
      <header>
        <h1>IMDB-Like-Clone</h1>  
      </header>
      <main>
        <Search userInput = {userInput} search={search}/> 
        <Results results={state.results}/>

      </main>
    </div>
  );
}

export default App;  
