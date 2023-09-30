import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import { Tooltip } from 'react-tooltip';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Pricing from './Components/Pricing';
import Blog from './Components/Blog';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <header id="header">
        <Header />
        <Tooltip id="my-tooltip" className='bg-success index' />
      </header>

      <main>
        <Home />
        <About />
        <Work />
        <Pricing />
        <Blog />
        <Testimonial />
        <Contact />
      </main>

      <footer id='footer'>
        <Footer />
      </footer>
    </>
  )
}
export default App

