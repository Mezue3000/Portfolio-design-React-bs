import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Tooltip } from 'react-tooltip';
import Header from "./Components/Header";
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Pricing from './Components/Pricing';


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
      </main>
    </>
  )
}

export default App

