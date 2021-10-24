import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import { signIn } from "../../servicces/backEndConnection";

import UserContext from "../../store/UserContext";;

const SignIn = () => {

    const [disabledForm, setDisabledForm] = useState(false);
    const [inputError, setInputError] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const inputHandler = ({ input, value }) => {
        setInputError(false);
        const newUserData = { ...user };
        newUserData[input] = value;
        setUser(newUserData);
    }

    const sendToServer = (e) => {
        e.preventDefault();
        if (disabledForm) return
        setDisabledForm(true);
        signIn(user)
            .then((res) => {
                setDisabledForm(false);
                setUser(res.data);
                localStorage.setItem('myWallet', JSON.stringify(res.data));
                history.push('/');
            })
            .catch((err) => {
                setInputError(true)
                setDisabledForm(false);
            })
    }

    return (
        <StyledLogin>
            <header className='header-login'>
                <h1>MyWallet</h1>
            </header>
            <form className='submit-form' onSubmit={sendToServer}>
                <StyledInput
                    disabled={disabledForm}
                    error={inputError}
                    placeholder='E-mail'
                    onChange={(e) => inputHandler({ input: 'email', value: e.target.value })}
                    value={user.email}
                />
                <StyledInput
                    disabled={disabledForm}
                    error={inputError}
                    placeholder='Senha'
                    onChange={(e) => inputHandler({ input: 'password', value: e.target.value })}
                    type='password'
                    value={user.password}
                />
                <StyledButton type='submit'>
                    Entrar
                </StyledButton>
                <Link to='/sign-up'>
                    <StyledButton themeType='secundary'>
                        Primeira vez? Cadastre-se!
                    </StyledButton>
                </Link>
            </form>
        </StyledLogin>
    )
}

export default SignIn;

const StyledLogin = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: calc(100vh - 40px);
   gap:24px;

   .submit-form{
       display: flex;
       flex-direction: column;
       gap: 13px;
       width: 100%;
   }

`