import React, {  useState, useEffect } from 'react';

import api from '../services/api';

import { Transition } from 'react-spring/renderprops'



// Styled

import GlobalStyle from '../styles/global';
import Container from '../styles/AppContainer';
import Aside from '../styles/Aside';
import Main from '../styles/Main';
import InputBlock from '../styles/Input-block';
import InputGroup from '../styles/InputGroup';

export default function App()  {
  
  const [devs, setDevs] = useState([])

  const [github_username, setGitHubUserName] = useState('');
  const [techs, setTechs] = useState('');


  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        
        const { latitude, longitude } = position.coords;

        setLatitude(latitude)
        setLongitude(longitude)

      },
      (error) => {
        console.log(error)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  useEffect(() => {

    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)

    }

    loadDevs();

  }, [])

  async function handleAddDev(e) {
      e.preventDefault()

      const response = await api.post('/devs', {
        github_username,
        techs,
        latitude,
        longitude
      })

      setGitHubUserName('')
      setTechs('')
     
      setDevs([...devs, response.data])

  }

    return (
      <>
        <GlobalStyle/>
        <Container >
          <Aside>
          <strong>Cadastrar</strong>
            <form>
              <InputBlock>

                <label htmlFor="github_username" >Usuário do Github </label>
                <input type="text" name="github_username" id="username" value={github_username} onChange={e => setGitHubUserName(e.target.value)} />
                
              </InputBlock>

              <InputBlock>
                
                <label htmlFor="techs" >Tecnologias</label>
                <input type="text" name="techs" id="techs" value={techs} onChange={e => setTechs(e.target.value)} />
              
              </InputBlock>
              
              <InputGroup>
                <InputBlock>

                  <label htmlFor="latitude" >Latitude</label>
                  <input type="text" name="latitude" id="latitude" required onChange={e => setLatitude(e.target.value)} value={latitude} />

                </InputBlock>

                <InputBlock>

                  <label htmlFor="longitude" >Longitude</label>
                  <input type="text" name="longitude" id="longitude" required onChange={e => setLongitude(e.target.value)} value={longitude}/>

                </InputBlock>
              </InputGroup>

              <button onClick={handleAddDev} type="submit">Salvar</button>
            </form>
          </Aside>
          <Main>
            <ul>
            {devs.map(dev => (

              <li key={dev._id} className="dev-item">
                <header>
                  <img src={dev.avatar_url} alt={dev.name} />
                  <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                    
                  </div>
                </header>
                <p>{dev.bio}</p>
                <a href={`https://github.com/${dev.github_username}`} target="_blank">Acessar perfil no Github</a>
              </li>


            ))}
              
            </ul>
          </Main>
        </Container>
      </>
    )
  
}
