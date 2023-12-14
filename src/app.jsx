/*import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

const root = ReactDOM.createRoot(document.getElementById('root'));

    
export default function App() {
    return (
    <BrowserRouter>  
      <div>
        <header className='container-fluid'>
          <nav>
            <div className='navbar-brand'>
              Connect4<sup>&reg;</sup>
              <p>connected to the internet</p>
              <p> + Nirvana Trivia</p>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='index'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='scores'>
                  Scores
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='play'>
                  Play!
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>
  
        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/play' element={<Play />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer>  
          <div className='container-fluid'>
            <span className='text-reset'>Author Name:</span>
            <p>Albino Chipmunk</p>
            <a className='text-reset' href="https://github.com/pandaloan/startup.git">GitHub</a>
          </div>
        </footer>
      </div>
      </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }*/

  import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login.jsx';
import { Play } from './play/play.jsx';
import { Scores } from './scores/scores.jsx';
import { About } from './about/about.jsx';
import { AuthState } from './login/authState.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div>
        <header className='container-fluid'>
          <nav>
            <div className='navbar-brand'>
              Connect4<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='about.jsx'>
                    About
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='scores.jsx'>
                    Scores
                  </NavLink>
                </li>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='play.jsx'>
                  Play!
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/play.jsx' element={<Play userName={userName} />} />
          <Route path='/scores.jsx' element={<Scores />} />
          <Route path='/about.jsx' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <div className='container-fluid'>
            <p>Author Name: Albino Chipmunk</p>
            <a className='text-reset' href="https://github.com/pandaloan/startup.git">GitHub</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
