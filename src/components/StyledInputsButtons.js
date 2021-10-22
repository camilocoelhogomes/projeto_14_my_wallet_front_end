import styled from "styled-components";
import React, { useContext } from "react";
import UserContext from "../store/UserContext";
import { useHistory } from "react-router";

const StyledInputButton = ({ icon, text, type }) => {
    const { setTransactionType } = useContext(UserContext);
    const history = useHistory();

    const addTransactionHandler = ({ type }) => {
        setTransactionType(type);
        history.push('/add-transaction');
    }

    return (
        <Style onClick={() => addTransactionHandler({ type })}>
            <p>{icon}</p>
            <p className='styled-input-p'>{text}</p>
        </Style>
    )
}

const Style = styled.button`
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
        text-align: start;
    }
`;

export default StyledInputButton;