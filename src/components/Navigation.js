import React from 'react'
import { Navbar, NavDropdown, Button, Form, FormControl, Nav } from 'react-bootstrap/'




export default function Navigation(props) {
    let keyword = "";
    return (
        <Navbar fixed="top" bg="black" expand="lg" variant="dark" className="navbar">
            <Navbar.Brand href="#"><img src="https://mir-s3-cdn-cf.behance.net/user/230/74eef1380177.5d014a902468d.jpg"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
                    <NavDropdown title="Movies" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=> props.onClick("now_playing")}>Now Playing</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=> props.onClick("top_rated")}>Top Rated</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=> props.onClick("upcoming")}>Up Coming</NavDropdown.Item>
                       
                        <NavDropdown.Item onClick={()=> props.onClick("popular")}>Popular</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline onSubmit={(event) => { event.preventDefault(); props.handleSubmitSearch(keyword, event); }}>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2 textArea" onChange={(e) => keyword=e.target.value} />
                    <Button variant="outline-info" type="submit">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
