import React from 'react'
import {Container, Button,Image,Row,Col} from 'react-bootstrap'
import './styles/HeroDetails.css'


const HeroDetails = ({hero}) => {

    return (
        <Container className="mt-5">
            <Container className="flex-container">
            <Image src="https://png.pngtree.com/element_origin_min_pic/16/11/18/794bfe5857e86ca1e78a22eff977a92e.jpg" fluid />
            </Container>
         <div className="styled-div">
            <h4>This is HERO NAME</h4>
            <h5>Powerstats</h5>
            <Row>
                <Col>
            <p>Peso: hero.stat</p>
            <p>Altura: hero.stat</p>
            <p>Alias: hero.stat</p>
            </Col>
            <Col>
            <p>Color de ojos: hero.stat</p>
            <p>Color Cabello: hero.stat</p>
            <p>Lugar de trabajo: hero.stat</p>
            </Col>
            </Row>
            
            <Button>Agregar a mis heroes</Button>
            <Button className="mt-1">Eliminar de mis heroes</Button>
            
        </div>
        </Container>
    )
}

export default HeroDetails
