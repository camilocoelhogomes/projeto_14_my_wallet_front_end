import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";

const SignUp = () => {
    return (
        <StyledLogin>
            <header className='header-login'>
                <h1>MyWallet</h1>
            </header>
            <form className='submit-form'>
                <StyledInput placeholder='Nome' />
                <StyledInput placeholder='E-mail' />
                <StyledInput placeholder='Senha' />
                <StyledInput placeholder='Confirme a Senha' />
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