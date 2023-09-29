import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <div className='p-5'>
        <h1 className='about fw-bold'>Contact Us</h1>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className='text-light'>Name</Form.Label>
          <Form.Control type="text" placeholder='Name' />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Form.Group controlId="formFileDisabled" className="mb-3">
          <Form.Label>Disabled file input example</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </div>
    </section>
  )
}

export default Contact