import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth'
import { Container, Overlay } from './styles'

export const UserResult = () => {
  const { repos, user } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    setRepositories(repos.data)
    if (repositories != null) {
      setLoading(false)
    }
    console.log(repositories)
  }, [])

  return (
    <Overlay>
      <Container>
        <h2 className="text-white uppercase">Repositórios de {user}</h2>
        {loading ? 'Loading' : repos.data?.map((result) => (
          <p key={result.id}> {result?.name} </p>
        ))}
      </Container>
    </Overlay>
  )
}
