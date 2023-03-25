import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import FAQS from './components/faqs/FAQS';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FloatingNav from './components/floating-nav/FloatingNav';
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <FAQS/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </div>
  )
}

export default App