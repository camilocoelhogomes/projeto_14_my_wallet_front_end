import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import { postTransaction } from '../../servicces/backEndConnection';
import UserContext from '../../store/UserContext';


const AddTransaction = () => {
    const { transactionType, setTransactionType, user } = useContext(UserContext);
    const history = useHistory();
    const [newEntrie, setNewEntrie] = useState({
        description: '',
        contabilType: transactionType,
        value: 0,
    });

    const changeHandler = ({ entrieValue, entrie }) => {
        const newerEntrie = { ...newEntrie };
        newerEntrie[entrie] = entrieValue;
        setNewEntrie(newerEntrie);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        postTransaction({
            ...newEntrie,
            token: user.token
        }).then((res) => {
            setTransactionType(false);
            history.push('/')
        }).catch(err => {
            if (err.response.status === 401) {
                setTransactionType(false);
                history.push('/sign-in');
            }
        }
        )
    }

    return (
        <StyledAddTransaction>
            <h2>Nova {transactionType === 'credit' ? 'Entrada' : 'Saida'}</h2>
            <form onSubmit={submitHandler} className='add-transaction-form'>
                <StyledInput
                    onChange={(event) => changeHandler({ entrieValue: event.target.value, entrie: 'value' })}
                    type='number'
                    placeholder='Valor'
                    value={newEntrie.value === 0 ? '' : newEntrie.value}
                />
                <StyledInput
                    placeholder='Descrição'
                    onChange={(event) => changeHandler({ entrieValue: event.target.value, entrie: 'description' })}
                    value={newEntrie.description}
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