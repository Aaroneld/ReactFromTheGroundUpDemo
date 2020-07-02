import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Login/Header';
import MiddleContent from './Login/MiddleContent';
import Footer from './Login/Footer';

const Container = styled.div`

`;


function Login (props) {

    return (
        <Container>
            <Header />
            <MiddleContent />
            <Footer /> 
        </Container>
    )
}

export default Login;
