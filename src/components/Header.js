import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className='wrapper'>
        <ul className='header-list'>
          <li className='header-list-item'><Link to='/home'>home</Link></li>
          <li className='header-list-item'><Link to='/search'>search</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
