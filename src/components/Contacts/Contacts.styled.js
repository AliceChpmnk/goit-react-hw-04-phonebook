import styled from 'styled-components';	

export const StyledContacts = styled.ul`

    li:not(:last-child) {
        margin-bottom: 8px;
    }

    li {
        display: flex;
        justify-content: space-between;
        padding: 5px 15px;
        background-color: white;
        border-radius: 10px;
    }

    button {
        border: none;
        outline: none;
        color: white;
        padding: 3px 5px;
        background: #1DA1F2;
        border-radius: 10px;
        cursor: pointer;

        :hover {
        background-color: red;
        }
    }
    `