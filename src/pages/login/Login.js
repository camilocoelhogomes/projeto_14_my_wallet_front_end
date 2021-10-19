import React from "react";
import styled from "styled-components";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";

const Login = () => {
    return (
        <StyledLogin>
            <header className='header-login'>
                <h1>MyWallet</h1>
            </header>
            <form className='submit-form'>
                <StyledInput placeholder='E-mail' />
                <StyledInput placeholder='Senha' />
                <StyledButton type='submit'>
                    Entrar
                </StyledButton>
                <StyledButton themeType='secundary'>
                    Primeira vez? Cadastre-se!
                </StyledButton>
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