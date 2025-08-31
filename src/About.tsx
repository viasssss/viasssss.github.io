import Button from 'react-bootstrap/Button'

function About(){
    return (
        <>
        <h2>My name is Riley.</h2>
        <Button variant="outline-primary" as='input' 
        type='submit' value='Submit' size='lg'></Button>
        </>
    )
}

export default About;