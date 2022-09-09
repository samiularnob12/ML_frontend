import React from "react";
import { Container, Form, Button, ButtonGroup } from "react-bootstrap";


function Home(){
    return (
        <div>
            <h1> Welcome to our ASL Learner website </h1>
            <Container>
                <Form className = "text-center">
                    <ButtonGroup vertical>
                        <Button>Easy Mode</Button>
                        <Button>Medium Mode</Button>
                        <Button>Hard Mode</Button>
                    </ButtonGroup>   
                </Form>
            </Container>
        </div>
    )
}

export default Home;