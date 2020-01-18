import styled from 'styled-components';

const Main = styled.main`
  
    margin-left: 30px;
    flex: 1;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        list-style: none;
    }

    .dev-item {
        background-color: #fff;
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
        border-radius: 2px;
        padding: 20px;

        p {
            color: #666;
            font-size: 0.875rem;
            line-height: 20px;
            margin: 10px 0;
        }

        a {
            color: #8e4dff;
            text-decoration: none;
            font-size: 0.875rem;
            cursor: pointer;

            &:hover {
                color: #5d2ae6;
            }

        }

        header {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        header img {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            cursor: pointer;
        }

        .user-info {
            margin-left: 10px;
        
            strong {
                display: block;
                font-size: 1rem;
                color: #333;
                cursor: pointer;
            }

            span {
                font-size: 13px;
                color: #999;
                margin-top: 2px;
            }
        
        }

    }

`;

export default Main 
