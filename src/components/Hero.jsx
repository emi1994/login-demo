import React from 'react'
import {Container, FormControl,Form , Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'

const Hero = ({ handleLogOut }) => {
    const [heroes, setHeroes] = useState([]);
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const url = `https://superheroapi.com/api/10226288740028652/${search}`

  
    
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={() => handleLogOut()}>Logout</button>
            </nav>

            <Container>
                <Form className="mt-5">
                    <FormControl type="text" placeholder="Search your superhero" className="mr-sm-2" onChange={handleSearch} value={search}/>
                    <Button variant="outline-info" className="mt-2">Search</Button>
                </Form>
            </Container>
        </section>
    )

}

export default Hero
