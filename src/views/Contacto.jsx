import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contacto() {
    return (
        <Form className="d-flex justify-content-center flex-column ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo:</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                <Form.Text className="text-muted">
                    No compartiremos tu dirección de correo con nadie.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción</Form.Label>
                <textarea class="form-control" rows="3" placeholder="Escribe aquí tu consulta..."></textarea>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Si, soy un humano" />
            </Form.Group>
            <Button className="mx-auto" variant="danger" type="submit">
                Enviar
            </Button>
        </Form>
    );
}
