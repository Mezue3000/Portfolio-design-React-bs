import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/Medias/img1.jpg'
import image2 from '../assets/Medias/img2.webp'
import image3 from '../assets/Medias/img3.jpg'



const Home = () => {
  return (
    <section id='home' className='mt-'>
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
    </section>
  )
}

export default Home