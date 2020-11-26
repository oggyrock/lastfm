import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
      <HashRouter>
        <div className="App">
            <Header />
          <div className='wrapper'>
            <Route path='/home' component={Home} />
            <Route path='/search' component={Search} />
          </div>
        </div>
      </HashRouter>
  );
}

export default App;
