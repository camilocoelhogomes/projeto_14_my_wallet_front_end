import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import StyledInputButton from "../../components/StyledInputsButtons";
import {
    HeaderIcon,
    MinusIcon,
    PlusIcon
} from "../../assets/icons/icons";
import UserContext from "../../store/UserContext";
import { getData } from "../../servicces/backEndConnection";

const Extrato = () => {
    const { user } = useContext(UserContext);
    const [transactions, setTransactions] = useState(false);
    const history = useHistory();
    useEffect(() => {
        console.log(user);
        getData({ token: user.token })
            .then((res) => {
                if (res.status === 204) {
                    setTransactions([])
                }
            }).catch(err => {
                console.log(err);
                history.push('/');
            })
    }, [])
    return (
        <StyledExtrato transactions={!transactions.length}>
            <div className='header-extrato'>
                <h2>Olá {user.name}</h2>
                <HeaderIcon />
            </div>
            <div className='data-extrato'>
                {
                    transactions ?
                        !transactions.length ?
                            <p className='no-movments'>Não há registros de entrada ou saída</p> :
                            <p>Tem Transação</p>
                        :
                        <></>

                }

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
    .no-movments{
        font-family: 'RelewayNormal';
        font-size: 20px;
    }
    .header-extrato{
        display: flex;
        justify-content: space-between;
    }
`;