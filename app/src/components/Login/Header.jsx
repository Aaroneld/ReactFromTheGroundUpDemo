import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ls from 'local-storage';
import { useHistory } from 'react-router';

const Container = styled.div`
height: 10vh;
background: #16BAC5;

display: flex;
justify-content: flex-start;
align-items: center;

h1 {
    flex-basis: 60%;
    text-align: left;
    margin-left: 1.5%;
}

form {
    flex-basis: 40%;

    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;

        label {
            text-align: left;
            margin-bottom: 3%;
        }

        input {
            height: 2.5vh;
        }

    }

    & div:first-child {
            margin-right: 3%;
    }

    button {
        align-self: flex-end;
        padding: 3% 5.5%;
        background: #212419;
        color: #EFE9F4;
        border: none;
        outline: none;
        margin-left: 5%;
    }

}
`;


function Header (props) {

    const { push } = useHistory();
    
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
            <h1>Studio Ghibili Movie App</h1>
            <form>
                <div>
                    <label>username</label>
                    <input 
                    autoComplete="off"
                    name="username"
                    type="text"
                    onChange={handleChange}
                    value={userInput.username}
                    />
                    </div>
                <div>
                    <label>password</label>
                    <input 
                    autoComplete="off"
                    name="password"
                    label="password"
                    type="password"
                    onChange={handleChange}
                    value={userInput.password}
                    />
                    
                </div>
                <button onClick={handleSubmit}>Login</button>
            </form>
        </Container>
    )
}

export default Header;
