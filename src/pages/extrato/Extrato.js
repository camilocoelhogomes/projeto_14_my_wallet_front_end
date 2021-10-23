import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router";
import StyledInputButton from "../../components/StyledInputsButtons";
import {
    HeaderIcon,
    MinusIcon,
    PlusIcon
} from "../../assets/icons/icons";
import UserContext from "../../store/UserContext";
import { getData } from "../../servicces/backEndConnection";
import Transaction from "./Transations";


const Extrato = () => {
    const { user, setTransactionType } = useContext(UserContext);
    const [saldo, setSaldo] = useState(false);
    const [transactions, setTransactions] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getData({ token: user.token })
            .then((res) => {
                if (res.status === 204) {
                    setTransactions([])
                    return;
                }
                setTransactions(res.data.movments);
                setSaldo(Number(res.data.total));
            }).catch(err => {
                if (err.status === 401) {
                    localStorage.removeItem('myWallet');
                }
                history.push('/');
            })
    }, []);

    const logOut = () => {
        localStorage.removeItem('myWallet');
        history.push('/');
    }

    return (
        <StyledExtrato transactions={!transactions.length} saldo={saldo}>
            <div className='header-extrato'>
                <h2>Olá, {user.name}</h2>
                <button onClick={logOut} className='logout-button'>
                    <HeaderIcon />
                </button>
            </div>
            <div className='data-extrato'>
                <div className='transacions-area'>
                    {
                        !transactions.length ?
                            <p className='no-movments'>Não há registros de <br /> entrada ou saída</p> :

                            transactions.map(transaction => <Transaction
                                key={transaction.id}
                                transaction={transaction}
                            />)
                    }
                </div>
                <>
                    {
                        !saldo ? <></> :
                            <div className='data-saldo'>
                                <div>
                                    <p>SALDO</p>
                                </div>
                                <div>
                                    <p className='data-saldo-value'>{Math.abs(saldo).toLocaleString('pt-br', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}</p>

                                </div>
                            </div>
                    }
                </>
            </div>
            <div className='inputs-extrato'>


                <StyledInputButton
                    type='credit'
                    text={'Nova entrada'}
                    icon={<PlusIcon />}
                />

                <StyledInputButton
                    type='debit'
                    text={'Nova Saida'}
                    icon={<MinusIcon />}
                />


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
        height: calc(100vh - 143px - 78px);
        width: 100%;
        overflow: scroll;
        background-color: #FFFFFF;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: ${({ transactions }) => transactions ? 'center' : 'space-between'};
        padding: ${({ transactions }) => transactions ? '0' : '23px 10px 10px 10px'};
    }

    .transacions-area{
        overflow: scroll;
        height: calc(100vh - 143px - 78px - 24px);
    }
    .data-saldo{
        bottom: 0;
        background-color: #FFFFFF;
        height: 24px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 17px;
    }

    .data-saldo-value{
        font-family: 'RelewayNormal';
        color: ${({ saldo }) => saldo > 0 ? '#03AC00' : '#C70000'};
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
        text-align: center;
        color: #868686;
        line-height: 23px;
    }
    .header-extrato{
        display: flex;
        justify-content: space-between;
    }
`;