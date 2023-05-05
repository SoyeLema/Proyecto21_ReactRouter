import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
    return (
        <div className=" bg-danger mb-5">
            <Nav className='d-flex'>
                <Nav.Item className=''>
                    <Nav.Link className='text-white text-decoration-none' href="/">Home <span className="icon-nav">🏠</span></Nav.Link>
                </Nav.Item>
                <Nav.Item className=''>
                    <Nav.Link className='text-white text-decoration-none' href="/contacto">Contacto <span className="icon-nav">📒</span></Nav.Link>
                </Nav.Item>
                <Nav.Item className='ms-auto'>
                    <Nav.Link className='text-white text-decoration-none' href="/" >Happy Cake <span className="icon-nav">🍰</span> </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

