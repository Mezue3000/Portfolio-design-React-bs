import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/Js/bootstrap.bundle.min.Js';
import { Tooltip } from 'react-tooltip'
import Header from "./Components/Header"


function App() {

  return (
    <>
      <header id="header">
        <Header />
        <Tooltip id="my-tooltip" className='bg-success' />
      </header>

      <main>
   
      </main>
    </>
  )
}

export default App

