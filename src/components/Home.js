import { useState, useEffect } from 'react';
import './home.css';

function Home() {
  const [list, setList] = useState([]);
  const [currentArtist, setCurrentArtist] = useState({});
  const setArtist = (artist) => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=4c253050b1788950960d40711fb0e7e8&format=json`)
      .then(result => result.json())
      .then(data => setCurrentArtist(data.artist))
  }

  console.log(currentArtist);

  useEffect(() => {
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=4c253050b1788950960d40711fb0e7e8&format=json&limit=10')
      .then(result => result.json())
      .then(data => {
        console.log(data.tracks.track)
        setList(data.tracks.track)
      })
  }, [])

  return (
    <div>
      {currentArtist.name && (
        <div className='artist-info'>
          <button className='close' onClick={() => setCurrentArtist('')}>+</button>
          <h2 className="artist">{currentArtist.name}</h2>
          <img className='image' src={currentArtist.image[5]['#text']} alt=''/>
          <div className='tags'>
            {currentArtist.tags.tag.map(tag => (
              <div key={tag.url}><a href={tag.url}>{tag.name}</a></div>
            ))}
          </div>
          <p className='text'>{currentArtist.bio.summary}</p>
        </div>
      )}
      {list.map(track => (
        <div className='track' key={track.url}>
          <a href={track.artist.url}><img className='song-pic' src={track.image[0]['#text']} alt=''/></a>
          <span>{track.name}</span>
          <span className='divider'>-</span>
          <span onClick={() => setArtist(track.artist.name)}><strong>{track.artist.name}</strong></span>
        </div>
      ))}
    </div>
  )
}

export default Home;
