import { Nav,Navbar, NavDropdown, Form, FormControl,Button} from 'react-bootstrap';
function NavBar() {
  return (
<Navbar bg="dark" expand="lg">
  <Navbar.Brand className="text-success" href="#home">ABInBev-Hackathon</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="text-secondary" href="/home">Home</Nav.Link>
      <Nav.Link className="text-secondary"href="/signup">Sign Up</Nav.Link>
      <Nav.Link className="text-secondary"href="/signin">Sign In</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;
