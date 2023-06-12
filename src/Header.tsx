import { Container, Nav, Navbar, Row } from "react-bootstrap"

export const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Container >
                    <Navbar.Brand href="#home">Маникюр</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Главная</Nav.Link>
                        <Nav.Link href="#features">Услуги</Nav.Link>
                        <Nav.Link href="#pricing">Цены</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}