import React from "react";
import styled from "styled-components";

const PassWordRequirements = ({password,passwordConfirm}) => {
    return (
        <StyledPassWordRequidements>
            <StyledPassWordRequidement fit={/(?=.{8,})/.test(password)}>
                Deve conter pelo menos 8 cadacteres
            </StyledPassWordRequidement>
            <StyledPassWordRequidement fit={/(?=.*[a-z])/.test(password)}>
                Deve conter letras minusculas
            </StyledPassWordRequidement>
            <StyledPassWordRequidement fit={/(?=.*[A-Z])/.test(password)}>
                Deve conter letras maiusculas
            </StyledPassWordRequidement>
            <StyledPassWordRequidement fit={/(?=.*[0-9])/.test(password)}>
                Deve conter números
            </StyledPassWordRequidement>
            <StyledPassWordRequidement fit={/(?=.*[^A-Za-z0-9])/.test(password)}>
                Deve conter caractores especiais
            </StyledPassWordRequidement>
            <StyledPassWordRequidement fit={passwordConfirm === password}>
                Campos de senha e confirme senha devem ser iguais
            </StyledPassWordRequidement>
        </StyledPassWordRequidements>
    )
}

export default PassWordRequirements;

const StyledPassWordRequidements = styled.ul`
    background-color: #FFFFFF;
    padding: 15px;
    border-radius: 5px;
`
const StyledPassWordRequidement = styled.li`
    color: ${({fit}) => fit ? 'green':'red'};
`