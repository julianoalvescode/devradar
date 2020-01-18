import styled from 'styled-components';

const Aside = styled.aside`
  
    width: 320px;
    background-color: #fff;
    box-shadow: 0 0 14px 0 rgb(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 30px 20px;


    strong {
        font-size: 1.25rem;
        text-align: center;
        display: block;
        color: #333;
    }

    form {
        margin-top: 30px;
    }

    button[type=submit] {
        width: 100%;
        border: 0;
        margin-top: 10px;
        background-color: #7d40e7;
        border-radius: 2px;
        padding: 15px;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #6931ca
        }

    }

`;

export default Aside
