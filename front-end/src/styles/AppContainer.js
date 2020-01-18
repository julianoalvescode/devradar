import styled from 'styled-components';

const Container = styled.div`
  
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;


    @media (max-width: 1000px) {
        flex-direction: column;

        main {
            margin-left: 0;
            margin-top: 30px;

           ul {
            @media (max-width: 650px) {
                grid-template-columns: 1fr;
            }
           }

        }

        aside {
            width: 100%;
        }

    }

`

export default Container
