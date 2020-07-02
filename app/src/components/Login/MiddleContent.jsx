import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`

    display: flex;

    > * {
        height: 80vh;
    }

    & > div:first-child {
        flex-basis: 66.66666666666666666666666666666666666%;
        background: #EFE9F4;
    }

    & div:last-child {
        flex-basis: 33.333333333333333333333333333333333333%;
        background: #CF5C36;

        label {
            background: #CF5C36;
        }

        form {

            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 80vh;

            div {
                display: flex;
                flex-direction: column;
                margin: 3.5% 0;

                label {
                    text-align: left;
                    margin-bottom: 3%;
                }

                input {
                    height: 2.5vh;
                    width: 25vw;
                }

            }

            button {

                padding: 9% 17.5%;
                margin-top: 6%;
                background: #EFE9F4;
                color: #212419;
                border: none;
                outline: none;
                font-weight: bold;
                font-size: 160%;
            }

        }   
    }

`;


function MiddleContent (props) {


    return (
        <Container>
            <div>

            </div>
            <div className="register">
                <form>
                    <div>
                        <label>First Name</label>
                        <input 
                        name="firstName"
                        type="text"
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input 
                        name="lastName"
                        type="text"/>
                    </div>
                    <div>
                        <label>username</label>
                        <input 
                        name="username"
                        type="text"
                        />
                        </div>
                    <div>
                        <label>password</label>
                        <input 
                        name="password"
                        type="password"
                        />
                        </div>
                    <div>
                        <label>Confirm Password</label>
                        <input 
                        name="password2"
                        type="password"
                        />
                    </div>
                    <button>Register</button>
                </form>
            </div>
        </Container>
    )
}

export default MiddleContent;
