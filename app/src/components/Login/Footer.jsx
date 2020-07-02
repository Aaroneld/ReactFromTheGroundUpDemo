import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`

    background: #16BAC5;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;


`;


function Footer (props) {


    return (
        <Container>
            <p>Copyright 2020</p>
        </Container>
    )
}

export default Footer;
