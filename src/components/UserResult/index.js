import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth'
import { Container, Overlay } from './styles'

export const UserResult = () => {
  const { repos, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([])

  console.log(repos)
  useEffect(() => {setRepositories(repos.data)}, [])

  return (
    <Overlay>
      <Container>
        <h2>Repositórios de {user}</h2>
        {repositories  && repositories.map(result => (
          <p key={repositories.id}> {result?.name} </p>
        ))}
      </Container>
    </Overlay>
  )
}
