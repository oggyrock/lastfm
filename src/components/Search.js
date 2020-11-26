import { useState } from 'react';
import './search.css';

function Search() {
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState([]);

  const getSearchList = (query) => {
    if(query === '') return;
    fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=4c253050b1788950960d40711fb0e7e8&format=json&limit=10`)
      .then(result => result.json())
      .then(data => setSearchList(data.results.trackmatches.track))
  }
  console.log(searchList);

  return (
    <>
      <form className='search' onSubmit={event => {
        event.preventDefault();
        getSearchList(query);
      }}>
        <input
          className='search-field'
          type="text"
          placeholder='search track'
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <button className='search-button'>Search</button>
      </form>
      {searchList.map(item => (
        <div className='track' key={item.name}>
          <a href={item.artist.url}><img className='song-pic' src={item.image[0]['#text']} alt='' /></a>
          <span>{item.name}</span>
          <span className='divider'>-</span>
          <span><strong>{item.artist}</strong></span>
        </div>
      ))}
    </>
  )
}

export default Search;
