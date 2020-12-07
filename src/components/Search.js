import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import './search.css';
import { setQuery, loadSearchList } from '../store/store';


function Search(props) {
  const dispatch = useDispatch();

  return (
    <>
      <form className='search' onSubmit={event => {
        event.preventDefault();
        props.loadSearchList(props.query);
        dispatch(setQuery(''));
      }}>
        <input
          className='search-field'
          type="text"
          placeholder='search track'
          value={props.query}
          onChange={({ target }) => {
            props.setQuery(target.value)}}
        />
        <button className='search-button'>Search</button>
      </form>
      {props.searchList.map(item => (
        <div className='track' key={Math.random()}>
          <a href={item.artist.url}><img className='song-pic' src={item.image[0]['#text']} alt='' /></a>
          <span>{item.name}</span>
          <span className='divider'>-</span>
          <span><strong>{item.artist}</strong></span>
        </div>
      ))}
    </>
  )
};

const mapStateToProps = state => ({
  query: state.query,
  searchList: state.searchList,
});

const mapDispatchToProps = dispatch => ({
  setQuery: query => dispatch(setQuery(query)),
  loadSearchList: query => dispatch(loadSearchList(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
