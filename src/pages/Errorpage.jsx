import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material';

const Errorpage = () => {
    let navigate = useNavigate();
    return (
        <Container>
            <h1>Oups you're lost!</h1>
            <p>Please click on this button to go back to the main page <button onClick={() => navigate("/")}>Homepage</button></p>
        </Container>
    )
}

export default Errorpage