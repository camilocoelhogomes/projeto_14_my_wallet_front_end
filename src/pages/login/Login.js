import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import { siginIn } from "../../servicces/backEndConnection";
import { siginInSchema } from "../../servicces/validations";
import UserContext from "../../store/UserContext";;

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [disabledForm, setDisabledForm] = useState(false);
    const [inputError, setInputError] = useState(false);
    const { setUser } = useContext(UserContext);

    const inputHandler = ({ input, value }) => {
        setInputError(false);
        const newUserData = { ...userData };
        newUserData[input] = value;
        setUserData(newUserData);
    }

    const sendToServer = (e) => {
        e.preventDefault();
        if (disabledForm) return
        const { error: joiError } = siginInSchema.validate(userData);
        if (joiError) {
            setInputError(!!joiError);
            return;
        }
        setInputError(!!joiError);
        setDisabledForm(true);
        siginIn(userData)
            .then((res) => {
                setDisabledForm(false);
                setUser({
                    name: res.data.name,
                    token: res.data.token,
                })
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
                />
                <StyledInput
                    disabled={disabledForm}
                    error={inputError}
                    placeholder='Senha'
                    onChange={(e) => inputHandler({ input: 'password', value: e.target.value })}
                    type='password'
                />
                <StyledButton type='submit'>
                    Entrar
                </StyledButton>
                <Link to='/SignUp'>
                    <StyledButton themeType='secundary'>
                        Primeira vez? Cadastre-se!
                    </StyledButton>
                </Link>
            </form>
        </StyledLogin>
    )
}

export default Login

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