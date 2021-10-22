import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import UserContext from '../../store/UserContext';


const AddTransaction = () => {
    const { transactionType, setTransactionType, user } = useContext(UserContext);

    return (
        <StyledAddTransaction>
            <h2>Nova {transactionType === 'credit' ? 'Entrada' : 'Saida'}</h2>
            <form className='add-transaction-form'>
                <StyledInput
                    placeholder='Valor'
                />
                <StyledInput
                    placeholder='Descrição'
                />
                <StyledButton type='submit'>
                    Salvar Alterações
                </StyledButton>
            </form>
        </StyledAddTransaction>
    )
}

export default AddTransaction;

const StyledAddTransaction = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    .add-transaction-form{
        display: flex;
        flex-direction: column;
        gap: 13px;
    }
`;