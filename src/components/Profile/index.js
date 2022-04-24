import React from 'react'
import { AuthContext } from '../../context/auth'
import img from '../../assets/close.png'

import { Container, Overlay, RenderColumn } from './styles'

const Profile = () => {
  const { returnProfile, profile } = React.useContext(AuthContext)

  console.log(profile.data)

  return (
    <Overlay>
      <Container>
        <img src={profile.data?.avatar_url} width={120} />
        <h3 className="py-3">{profile.data?.name}</h3>
        <span className="py-3">{profile.data?.blog}</span>
        <h4 className="py-3">{profile.data?.bio}</h4>
        <RenderColumn className="d-flex justify-content-between">
          <div>
            <span>{profile.data?.public_repos}</span>
            <br />
            <strong>Repositórios</strong>
          </div>
          <div>
            <span>{profile.data?.followers}</span>
            <br />
            <strong>Seguidores</strong>
          </div>
          <div>
            <span>{profile.data?.following}</span>
            <br />
            <strong>Seguindo</strong>
          </div>
        </RenderColumn>
      </Container>
    </Overlay>
  )
}

export default Profile
