import React, {  useState, useEffect } from 'react';
import GlobalStyle from '../styles/global';
import Container from '../styles/AppContainer';
import Aside from '../styles/Aside';
import Main from '../styles/Main';
import InputBlock from '../styles/Input-block';
import InputGroup from '../styles/InputGroup';

export default function App()  {
  
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


  async function handleAddDev(e) {
    e.preventDefault()



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

              <button type="submit">Salvar</button>
            </form>
          </Aside>
          <Main>
            <ul>
              <li className="dev-item">
                <header>
                  <img src="https://avatars2.githubusercontent.com/u/43914533?s=460&v=4" alt=""/>
                  <div className="user-info">
                    <strong>Juliano Alves</strong>
                    <span>React JS, React Native, Node JS</span>
                    
                  </div>
                </header>
                <p>Hello, my name is Juliano Alves! I am a lover of technology and mainly web development. Hunting the programmer girlfriend.</p>
                <a href="https://github.com/julianoalvescode">Acessar perfil no Github</a>
              </li>
              <li className="dev-item">
                <header>
                  <img src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt=""/>
                  <div className="user-info">
                    <strong>José Alves</strong>
                    <span>React JS, React Native, Node JS</span>
                    
                  </div>
                </header>
                <p>Hello, my name is Juliano Alves! I am a lover of technology and mainly web development. Hunting the programmer girlfriend.</p>
                <a href="https://github.com/julianoalvescode">Acessar perfil no Github</a>
              </li>
              <li className="dev-item">
                <header>
                  <img src="https://avatars2.githubusercontent.com/u/4248081?s=400&v=4" alt=""/>
                  <div className="user-info">
                    <strong>Filipe Deschamps</strong>
                    <span>React JS, React Native, Node JS</span>
                    
                  </div>
                </header>
                <p>A nice guy.</p>
                <a href="https://github.com/julianoalvescode">Acessar perfil no Github</a>
              </li>
              <li className="dev-item">
                <header>
                  <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt=""/>
                  <div className="user-info">
                    <strong>Diego Fernandes</strong>
                    <span>React JS, React Native, Node JS</span>
                    
                  </div>
                </header>
                <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
                <a href="https://github.com/julianoalvescode">Acessar perfil no Github</a>
              </li>
            </ul>
          </Main>
        </Container>
      </>
    )
  
}
