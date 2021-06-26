import React from 'react'
import {Container, FormControl,Form , Button, Row, Col,Card} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import './styles/Hero.css'
import HeroDetails from './HeroDetails'
import fire from '../fire'


const Hero = () => {
    const [heroes, setHeroes] = useState([]);
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleKeyDown = (e) => {
        if(e.key === 'enter'){
            console.log('hey there')
        }
    }

   useEffect(()=>{
    let debouncer;
       clearTimeout(debouncer)
       debouncer = setTimeout(()=>{
            if(!search || search.length === 0){
                setHeroes([])
            }
            if(search && search.length > 0){
                fetch(`https://www.superheroapi.com/api.php/10226288740028652/search/${search}`)
                .then(response => response.json())
                .then(data => {
                    if(!data.results){
                        setHeroes([])
                    } else {
                        setHeroes(data.results)
                    }
                })
            }
        },800)
        console.log(heroes)
   }, [search]);

   const handleLogOut = () =>{
    fire
    .auth()
    .signOut()
  }
  


    
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={() => handleLogOut()}>Logout</button>
            </nav>

            <Container>
                <Form className="mt-5">
                    <FormControl type="text" placeholder="Search your superhero" className="mr-sm-2" onChange={handleSearch} value={search} onKeyDown={handleKeyDown}/>
                </Form>
            </Container>

            <Container>
                <Row >
                {heroes.map((hero)=>
                    <Col className="flexible-col" key={hero.id}>
                        <Card style={{ width: '18rem' }} className="mt-3 mb-3">
                            <Card.Img variant="top" src={hero.image.url}/>
                            <Card.Body>
                            <Card.Title>{hero.name}</Card.Title>
                                <Card.Text>
                                Gender: {hero.appearance.gender}
                                </Card.Text>
                                <Card.Text>
                                Race: {hero.appearance.race}
                                </Card.Text>
                                <Button variant="primary">More info</Button>
                                <Button variant="primary" className="mt-1">Add to team</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
                </Row>    
            </Container>
            <HeroDetails/>
        </section>
    )

}

export default Hero
