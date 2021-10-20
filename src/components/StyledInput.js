import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    border: ${({ error }) => error ? '1px solid #FF0000' : 'none'};
    font-size: 20px;
    line-height: 23px;
    color: ${({ error }) => error ? '#FF0000' : '#000000'};
    padding: 17px 15px;
    font-family: 'Raleway', sans-serif;

    ::placeholder{
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        line-height: 23px;
        color: ${({ error }) => error ? '#FF0000' : '#000000'};
    }
`

export default StyledInput;