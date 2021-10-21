import React, { useState, useContext } from "react";
import styled from "styled-components";
import StyledInputButton from "../../components/StyledInputsButtons";
import {
    HeaderIcon,
    MinusIcon,
    PlusIcon
} from "../../assets/icons/icons";

const Extrato = () => {
    return (
        <StyledExtrato>
            <div className='header-extrato'>
                <h2>Olá Fulano</h2>
                <HeaderIcon />
            </div>
            <div className='data-extrato'>

            </div>
            <div className='inputs-extrato'>
                <StyledInputButton text={'Nova entrada'} icon={<PlusIcon />} />
                <StyledInputButton text={'Nova Saida'} icon={<MinusIcon />} />
            </div>
        </StyledExtrato>
    )
}
export default Extrato;
const StyledExtrato = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    height: calc(100vh - 40px);
    gap: 13px;
    
    .data-extrato{
        flex-grow: 1;
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 5px;
    }

    .inputs-extrato{
        width: 100%;
        height: 155px;
        display: flex;
        gap: 13px;
    }

    .header-extrato{
        display: flex;
        justify-content: space-between;
    }
`;