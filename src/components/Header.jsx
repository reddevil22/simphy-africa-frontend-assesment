import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Header = () => (
    <div className="App-header">
        <h1>Cat Heaven</h1>
        <div className="App-nav">
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/cats'>Cats</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
)

export default Header;