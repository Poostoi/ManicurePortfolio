import { Nav, Row } from "react-bootstrap"

export const Header = () => {
    return (
        <>
            <Nav  className="justify-content-center" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">Главная</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Услуги</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Цены</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}