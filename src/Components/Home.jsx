import Carousel from 'react-bootstrap/Carousel'
import ProgressBar from 'react-bootstrap/ProgressBar';
import image1 from '../assets/Medias/img1.jpg'
import image2 from '../assets/Medias/img2.webp'
import image3 from '../assets/Medias/img3.jpg'

const Home = () => {
  return (
    <section id='home' className='homy'>
      <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 imagey"
              src= {image1}
              alt="First slide"
            />
              
            <Carousel.Caption>
              <h5 className='heading1'>Mezue Obiora Full-stack Diary</h5>
              <p className='para1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 imagey"
              src={image2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 className='heading1'>Mezue Obiora Full-stack Diary</h5>
              <p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 imagey"
              src={image3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5 className='heading1'>Mezue Obiora Full-stack Diary</h5>
              <p className='para1'>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>

          </Carousel.Item>
        </Carousel>

        <div>
          <h3 className='fs-2 ms-5 fw-bold text-info mt-1'>Cloud Computing</h3>
          <ProgressBar className='w-75 ms-5' animated now={55} />;
          <h3 className='fs-2 ms-5 fw-bold text-white'>React-Redux</h3>
          <ProgressBar className='w-75 ms-5 mb-2' animated now={75} />
        </div>
    </section>
  )
}
export default Home