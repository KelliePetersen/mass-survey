import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Mass Survey</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a>Log in with Google</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
