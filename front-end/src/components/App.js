import React, {  useState, useEffect } from 'react';

import api from '../services/api';

import swal from 'sweetalert'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


// Styled

import GlobalStyle from '../styles/global';
import Container from '../styles/AppContainer';
import Aside from '../styles/Aside';
import Main from '../styles/Main';

import DevForm from './DevForm/index'

export default function App()  {
  
  const [devs, setDevs] = useState([])


  useEffect(() => {

    AOS.init();

  }, []) 

  useEffect(() => {

    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)

    }

    loadDevs();

  }, [])

  async function handleAddDev(data) {


      const response = await api.post('/devs', data)

      await swal("Salvo", "Você registrou o usuário com sucesso.", "success");  

      setDevs([...devs, response.data]) 
      

  }

    return (
      <>
        <GlobalStyle/>
        <Container >
          <Aside data-aos="fade-in" data-aos-duration="5000">
            <DevForm onSubmit={handleAddDev}></DevForm>            
          </Aside>
          <Main>
            <ul>
            {devs.map(dev => (

              <li data-aos="fade-in" data-aos-duration="4000" key={dev._id} className="dev-item">
                <header>
                  <a href={`https://github.com/${dev.github_username}`} target="_blank">
                    <img src={dev.avatar_url} alt={dev.name} />
                  </a>
                  <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                    
                  </div>
                </header>
                <p>{dev.bio}</p>
                <a  href={`https://github.com/${dev.github_username}`} target="_blank">Acessar perfil no Github</a>
              </li>


            ))}
              
            </ul>
          </Main>
        </Container>
      </>
    )
  
}
