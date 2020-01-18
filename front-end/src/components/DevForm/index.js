import React, { useState, useEffect } from 'react'


import InputBlock from '../../styles/Input-block';
import InputGroup from '../../styles/InputGroup';

export default function DevForm({ onSubmit }) {

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

  async function handleSubmit(e) {
      e.preventDefault()

      await onSubmit({
        github_username,
        techs,
        latitude,
        longitude
      })

      setGitHubUserName('')
      setTechs('')

  }

    return(
        <>

            <strong>Cadastro</strong>
            <form onSubmit={handleSubmit}>
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

              <button  type="submit">Salvar</button>
            </form>
        </>
    )

}