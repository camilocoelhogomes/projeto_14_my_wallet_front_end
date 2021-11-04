import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import UserContext from "../../store/UserContext";
import { signUp } from "../../servicces/backEndConnection";
import PassWordRequirements from "./PassWordRequirements";

const SignUp = () => {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    const inputHandler = ({ input, value }) => {
        const newUserData = { ...user };
        newUserData[input] = value;
        setUser(newUserData);
    }

    const sendToServer = (event) => {
        event.preventDefault();
        signUp(user).then((res) => {
            history.push('/');
        }).catch((err) => {

        })
    }

    return (
        <StyledLogin>
            <header className='header-login'>
                <h1>MyWallet</h1>
            </header>
            <form className='submit-form' onSubmit={sendToServer}>
                <StyledInput
                    placeholder='Nome'
                    onChange={(event) => inputHandler({ input: 'name', value: event.target.value })}
                />
                <StyledInput
                    placeholder='E-mail'
                    onChange={(event) => inputHandler({ input: 'email', value: event.target.value })}
                />
                <StyledInput
                    placeholder='Senha'
                    type='password'
                    onChange={(event) => inputHandler({ input: 'password', value: event.target.value })}
                />
                <StyledInput
                    placeholder='Confirme a Senha'
                    type='password'
                    onChange={(event) => inputHandler({ input: 'passwordConfirm', value: event.target.value })}
                />
                <PassWordRequirements password={user.password} passwordConfirm={ user.passwordConfirm}/>
                <StyledButton type='submit'>
                    Cadastrar
                </StyledButton>
                <Link to='/'>
                    <StyledButton themeType='secundary'>
                        Já tem uma conta? Entre Agora
                    </StyledButton>
                </Link>
            </form>
        </StyledLogin>
    )
}

export default SignUp

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