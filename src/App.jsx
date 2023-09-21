import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Tooltip } from 'react-tooltip'
import Header from "./Components/Header"
import Home from './Components/Home';


function App() {

  return (
    <>
      <header id="header">
        <Header />
        <Tooltip id="my-tooltip" className='bg-success index' />
      </header>

      <main>
        <Home />
      </main>
    </>
  )
}

export default App

