import styled from "styled-components";
import React from "react";

const StyledInputButton = ({ icon, text }) => {
    return (
        <Style>
            <p>{icon}</p>
            <p className='styled-input-p'>{text}</p>
        </Style>
    )
}

const Style = styled.div`
    cursor: pointer;
    background-color: #A328D6;
    height: 100%;
    flex-grow: 1;
    border-radius: 5px;
    padding: 10px;
    color: #FFFFFF;
    font-family: 'RelawayBold';
    font-size: 17px;
    font-weight:700;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    .styled-input-p{
        width: 50px;
    }
`;

export default StyledInputButton;