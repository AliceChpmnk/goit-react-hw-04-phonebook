import styled from 'styled-components';	

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
    margin-bottom: 40px;
    padding: 20px 40px 40px 40px;
    background-color: white;
    border-radius: 30px;

    label, input, button {
    display: block;
    }
    `

export const StyledInput = styled.input`
    display: block;
    caret-color: blue;
    width: 100%;
    margin-bottom: 15px;
    outline: none;
    border: none;
    background: #ecf0f3;
    padding: 5px;
    padding-left: 20px;
    height: 20px;
    font-size: 14px;
    border-radius: 50px;
    box-shadow: inset 4px 4px 4px #cbced1, inset -4px -4px 4px white;
`

export const StyledButton = styled.button`
    border: none;
    outline: none;
    color: white;
    padding: 10px;
    background: #1DA1F2;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 900;
    box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
    transition: 0.5s;

    :hover {
    box-shadow: none;
    }
    `