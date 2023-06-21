import { Container, Nav, Navbar, Row } from "react-bootstrap";

export const Header = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mx-0" href="#">
            Маникюр
          </Navbar.Brand>
          <Nav className="mx-auto-xs">
            <Nav.Link href="#services">Услуги</Nav.Link>

            <Nav.Link href="#portfolio">Портфолио</Nav.Link>
            <Nav.Link href="#contact">Контакты</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
