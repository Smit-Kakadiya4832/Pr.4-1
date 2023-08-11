import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="container my-5 ">
            <Row className="mb-2">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Control type="text" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Control type="text" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                    <Form.Control type="date" placeholder="Date" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Date.
                    </Form.Control.Feedback>
                </Form.Group>
                <DropdownButton as={Col} md="6"
                    id="nav-dropdown-example"
                    title="Country"
                >
                    <NavDropdown.Item href="#action/3.1"
                        value={1}>India</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"
                        value={1}>
                        USA
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"
                        value={1}>Australia</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4"
                        value={1}>
                        Canada
                    </NavDropdown.Item>
                </DropdownButton>
            </Row>
            <Form.Group className="mb-2">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Male"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        required
                    /><Form.Control.Feedback type="invalid">
                        This field is Required.
                    </Form.Control.Feedback>
                    <Form.Check
                        inline
                        label="Female"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        This field is Required.
                    </Form.Control.Feedback>
                    <Form.Check
                        inline
                        label="Other"
                        name="group1"
                        type={type}
                        id={`inline-${type}-3`}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        This field is Required.
                    </Form.Control.Feedback>
                </div>
            ))}
            <br />
            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default FormExample;