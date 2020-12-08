import { useEffect } from 'react';
import './home.css';
import { connect, useDispatch } from 'react-redux';
import { loadList, loadArtist, pickArtist } from '../store/store';

function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    props.loadList();
  }, [])

  return (
    <div>
      {props.currentArtist.name && (
        <div className='artist-info'>
          <div className='wrapper'>
            <h2 className="artist">
              {props.currentArtist.name}
              <button className='close' onClick={() => dispatch(pickArtist(''))}>+</button>
            </h2>
            <img className='image' src={props.currentArtist.image[5]['#text']} alt=''/>
            <div className='tags'>
              {props.currentArtist.tags.tag.map(tag => (
                <div key={tag.url}><a href={tag.url}>{tag.name}</a></div>
              ))}
            </div>
            <p className='text'>{props.currentArtist.bio.summary}</p>
          </div>
        </div>
      )}
      {props.list.map(track => (
        <div className='track' key={track.url}>
          <a href={track.artist.url}><img className='song-pic' src={track.image[0]['#text']} alt=''/></a>
          <span>{track.name}</span>
          <span className='divider'>-</span>
          <span className='artist-name' onClick={() => props.loadArtist(track.artist.name)}><strong>{track.artist.name}</strong></span>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.list,
  currentArtist: state.currentArtist
});

const mapDispatchToProps = dispatch => ({
  loadList: () => dispatch(loadList()),
  loadArtist: artist => dispatch(loadArtist(artist)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
