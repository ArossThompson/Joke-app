import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
          <div className="logo">
            <Link to='/Random-joke'>Joke App</Link>
          </div>
          <div className="navigation">
            <ul className="nav-ul">
              <li className='nav-li'><Link to='/Random-joke'>Random Joke</Link></li>
              <li className="nav-li"><Link to='/Custom-joke'>Custom Joke</Link></li>
              <li className="nav-li"><Link to='/Joke-list'>Joke-list</Link></li>
            </ul>
          </div>      
      </header>
    )
  }
}

export default Header;
