import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ghibiliLogo from '../../app-assets/1280px-Studio_Ghibli_logo.svg.png'
import halfTone from '../../app-assets/Halftone-Effect-Background-2.png'

const Container = styled.div`

    display: flex;
    

    > * {
        height: 80vh;
    }

    & > div:first-child {
        flex-basis: 66.66666666666666666666666666666666666%;
        background: #EFE9F4;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 80%;
            margin-top: -5%;
        }
    }

    & div:last-child {

        flex-basis: 33.333333333333333333333333333333333333%;
        background: #CF5C36;

        position: absolute;
        z-index: 3;
        top: 9%;
        left: 67%;

        border-radius: 50px 0 0 20%;

        min-width: 33vw;
        min-height: 82vh;

        box-shadow: -13px 22px 38px -5px rgba(0,0,0,0.37);

        > * {
            z-index: 2;
            position: relative;
        }

        &::before {

            content: "";
            background-image: url(${halfTone});
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            opacity: .1;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            border-radius: 50px 0 0 20%;
            z-index: 1;

        }

        label {
            background: rgba(0,0,0,0);
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

                    color: #EFE9F4;
                    font-weight: bold;
                }

                input {
                    height: 3.5vh;
                    width: 25vw;
                    outline: none;
                    border: none;

                    background: #CF5C36;
                    filter: brightness(150%);
                    border-radius: 10px;

                    padding-left: 5%;
                    color: #EFE9F4;
                }

            }

            button {

                padding: 6% 10.5%;
                margin-top: 6%;
                background: rgba(33, 36, 25, .2);
                color: #EFE9F4;
                border: none;
                outline: none;
                font-weight: bold;
                font-size: 160%;

                border-radius: 30% 10px 30% 10px;
                
            }

            button:hover {
                background: rgba(33, 36, 25, .4);

            }

        }   
    }

`;


function MiddleContent (props) {


    return (
        <Container>
            <div>
                <img src={ghibiliLogo} alt="ghibli logo" />
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
                    <button>REGISTER</button>
                </form>
            </div>
        </Container>
    )
}

export default MiddleContent;
