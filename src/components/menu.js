import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  
  const getClass = (path) => {
    const inactivePages = ['/loja'];
    const isPageInactive = (path) => inactivePages.includes(path);

    const activePage = window.location.pathname;

    return `buttonMenu ${isPageInactive(path)?'disabled':''} ${activePage === path ? 'active':''}`;
  }

  return (
    <Row id="menu">
      <Col>
        <Navbar expand="lg" bg="semana-2023">
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="align-items-center mx-auto">
                <Nav.Item>
                  <Nav.Link href="/" className={getClass('/')}>HOME</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/sobre" className={getClass('/sobre')}>SOBRE</Nav.Link>
                </Nav.Item>
                <NavDropdown title="EDIÇÕES" id="basic-nav-dropdown" className='buttonMenu'>
                  <NavDropdown.Item href="/2023" className={getClass('/2023')}>2023</NavDropdown.Item>
                  <NavDropdown.Item href="/edicoes" className={getClass('/edicoes')}>VER TODAS</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link href="/loja" className={getClass('/loja')}>LOJA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contato" className={getClass('/contato')}>CONTATO</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default Menu;