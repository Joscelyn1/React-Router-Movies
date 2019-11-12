import React, { useState } from 'react';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };


  return (
    <div>

      <SavedList list={savedList} />
      <Route path="/" exact component={MovieList} />
      <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList}/>} />
      {/*<Route path="/movies/:id" render={ (props) => {return(<Movie {...props} addToSavedList={addToSavedList}}/>)*/}
    </div>
  );
};

export default App;
