import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ls from 'local-storage';
import { useHistory } from 'react-router';

import noFaceImage from '../../app-assets/e204ec2f80268d6b8d1607a2ab6f9d9b.png';

const Container = styled.div`
height: 10vh;
background: #16BAC5;

display: flex;
justify-content: flex-start;
align-items: center;

position: relative;
z-index: 2;
-webkit-box-shadow: 4px -2px 88px 6px rgba(0,0,0,0.42);
-moz-box-shadow: 4px -2px 88px 6px rgba(0,0,0,0.42);
box-shadow: 4px -2px 88px 6px rgba(0,0,0,0.42);

> div {
    flex-basis: 60%;
    text-align: left;
    margin-left: 1.5%;

    display: flex;
    align-items: center;

    img {
        width: 4%;
        height: 1%;
        margin-right: 3%;
    }

}

form {
    flex-basis: 40%;

    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        margin-top: -4%;
        width: 30%;

        label {
            text-align: left;
            margin-bottom: 3%;

            color: #EFE9F4;
            font-weight: bold;

        }

        input {
            height: 2.5vh;
            outline: none;
            border: none;
            padding-left: 5%;
            color: #EFE9F4;
            
            background: #16BAC5;
            filter: brightness(150%);
            border-radius: 10px;
        }

    }

    & div:first-child {
            margin-right: 3%;
    }

    button {
        padding: 2% 5.5%;
        min-width: 10vw;
        background: rgba(0,0,0,0);
        color: #EFE9F4;
        border: 3px solid #EFE9F4;
        margin-left: 5%;
        margin-top: -1%;
        justify-self: flex-end;
        align-self: flex-end;

        font-size: 125%;
        font-weight: bolder;

        &:hover {
            border-color: #CF5C36;
            color: #CF5C36;
            filter: brightness(120%);
        }
    }

}
`;


function Header (props) {

    const { push } = useHistory();
    
    const [readOnly, setReadOnly ] = useState(true);

    const [userInput, setUserInput] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        e.preventDefault();

        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(userInput.username !== "" && userInput.password !== ""){
            ls.set('user', userInput);
            push('/dashboard');
        }else {
            alert("please put in you info");
        }
    }


    return (
        <Container>
            <div>
                <img src={noFaceImage} alt="no face" />
                <h1>Ghibli App</h1>
            </div>
            <form>

                
                <div>
                    <label>username</label>
                    <input 
                    onFocus={() => { setReadOnly(false)}}
                    readOnly={readOnly}
                    name="username"
                    type="text"
                    onChange={handleChange}
                    value={userInput.username}
                    />
                    </div>
                <div>
                    <label>password</label>
                    <input
                    onFocus={() => { setReadOnly(false) }}
                    readOnly={readOnly}
                    name="password"
                    label="password"
                    type="password"
                    onChange={handleChange}
                    value={userInput.password}
                    />
                    
                </div>
                <button onClick={handleSubmit}>LOGIN</button>
            </form>
        </Container>
    )
}

export default Header;
