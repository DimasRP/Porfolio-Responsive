import './header.css'
import data from './data'
import HeaderImage from '../../assets/Header.jpg'


const Header = () => {
  return (
    <header id='header'>
        <div className='container header-container'>
          <div className='header-profile'>
            <img src={HeaderImage} alt='header'></img>
          </div>
          <div>
            <h3>Dimas Rizki P</h3>
            <p> Lorem</p>
          </div>
          <div className='header-cta'>
            <a href='#contact' className='btn primary'>Let's Talk</a>
            <a href='#portfolio' className='btn primary'>My Project</a>
          </div>
          <div className='header-socials'>
            {
              data.map( item => 
                <a key={item.id} href={item.link} target='blank' rel='noopener noreferrer'>
                  {item.icon}
                </a>
                )
            }
          </div>
        </div>
    </header>
  )
}

export default Header