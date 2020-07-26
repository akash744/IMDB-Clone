import React, {useState} from 'react';
import Search from './components/Searchbar' 
import Results from './components/searchResults';
import axios from 'axios';
import DetailsPage from './components/detailsPage';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  }),
);


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

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  
  return (
    <div className="App">
      <div>
      <Button className = "modal-button" variant="contained" color="secondary" onClick={handleClick}>
        READ THIS
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>  
          <p>
            - Project not fully completed, currently can only search for Movies and TV Series and Display them all.   
          </p> 
          <p>- Eg. Type Batman into the Search Box to test it out.</p>
          <p>- Plans to add a detail page for each specific TV Show and movie in the future.</p>
          <p>
            - Dont misspell a title you search for, causes app to crash, if done simply refresh the page.
          </p>
          <p id = "click-away">- You can Click away now</p>
        </Typography>
      </Popover>
      </div>
      
      
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
