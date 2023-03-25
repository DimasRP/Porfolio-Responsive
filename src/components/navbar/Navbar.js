import logo from '../../assets/Logo.jpg'
import {IoIosColorPalette} from 'react-icons/io'
import data from './data.js'
import './navbar.css'
const Navbar = () => {
  return (
    <nav>
        <div className='container nav-container'>
            <a href='index.html' className='nav-logo'>
                  <img src={logo} className="App-logo" alt="logo" />
            </a>
            <ul className='nav-menu'>
              {
                data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
              }
            </ul>
            <button id='theme-icon'><IoIosColorPalette/></button>
        </div>
    </nav>
  )
}

export default Navbar