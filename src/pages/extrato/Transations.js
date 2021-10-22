import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
const Transaction = ({ transaction }) => {
    const {
        description,
        date,
        value,
        contabilType,
    } = transaction

    return (
        <StyledTransaction contabilType={contabilType}>
            <div className='table-area'>
                <p className='date-transaction'>
                    {dayjs(date).format('DD/MM')}
                </p>
            </div>
            <div className='table-area description'>
                <p className='description'>
                    {description}
                </p>
            </div>
            <div className='table-area value-transaction'>
                <p className='value'>
                    {Number(value).toLocaleString('pt-br', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </p>
            </div>
        </StyledTransaction>
    )
}

export default Transaction;

const StyledTransaction = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 8px;
    .date-transaction{
        font-family: 'RelewayNormal';
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }

    .description{
        flex-grow: 1;
        font-family: 'RelewayNormal';
        font-size: 16px;
        line-height: 19px;
        word-wrap: break-word;
    }

    .value{
        font-family: 'RelewayNormal';
        color:${({ contabilType }) => contabilType === 'credit' ? '#03AC00' : '#C70000'}
    }
    .table-area{
        display: flex;
        align-items: center;
    }
`